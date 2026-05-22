interface Env {
  DB: D1Database;
}

type TaskRow = {
  id: string;
  meeting_title: string;
  action_title: string;
  owner: string;
  due_date: string;
  priority: "high" | "medium" | "low";
  status: "todo" | "doing" | "done";
  memo: string;
  created_at: string;
  updated_at: string;
};

type TaskPayload = {
  meeting_title?: string;
  action_title?: string;
  owner?: string;
  due_date?: string;
  priority?: "high" | "medium" | "low";
  status?: "todo" | "doing" | "done";
  memo?: string;
};

const jsonHeaders = {
  "content-type": "application/json; charset=utf-8",
};

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: jsonHeaders,
  });
}

async function readJson<T>(request: Request): Promise<T | null> {
  try {
    return (await request.json()) as T;
  } catch {
    return null;
  }
}

function normalizePayload(body: TaskPayload | null): Required<TaskPayload> | null {
  if (!body) return null;

  const meeting_title = String(body.meeting_title ?? "").trim();
  const action_title = String(body.action_title ?? "").trim();
  const owner = String(body.owner ?? "").trim();
  const due_date = String(body.due_date ?? "").trim();
  const priority = body.priority ?? "medium";
  const status = body.status ?? "todo";
  const memo = String(body.memo ?? "").trim();

  const validPriorities = ["high", "medium", "low"];
  const validStatuses = ["todo", "doing", "done"];

  if (!meeting_title || !action_title || !owner || !due_date) {
    return null;
  }

  if (!validPriorities.includes(priority)) {
    return null;
  }

  if (!validStatuses.includes(status)) {
    return null;
  }

  return {
    meeting_title,
    action_title,
    owner,
    due_date,
    priority,
    status,
    memo,
  };
}

async function getTasks(env: Env): Promise<Response> {
  const result = await env.DB.prepare(
    `
    SELECT
      id,
      meeting_title,
      action_title,
      owner,
      due_date,
      priority,
      status,
      memo,
      created_at,
      updated_at
    FROM tasks
    ORDER BY
      CASE status
        WHEN 'todo' THEN 1
        WHEN 'doing' THEN 2
        WHEN 'done' THEN 3
        ELSE 4
      END,
      due_date ASC,
      created_at DESC
    `
  ).all<TaskRow>();

  return json({
    ok: true,
    tasks: result.results ?? [],
  });
}

async function createTask(request: Request, env: Env): Promise<Response> {
  const body = await readJson<TaskPayload>(request);
  const payload = normalizePayload(body);

  if (!payload) {
    return json(
      {
        ok: false,
        message: "必須項目が不足しているか、入力値が不正です。",
      },
      400
    );
  }

  const now = new Date().toISOString();
  const id = crypto.randomUUID();

  await env.DB.prepare(
    `
    INSERT INTO tasks (
      id,
      meeting_title,
      action_title,
      owner,
      due_date,
      priority,
      status,
      memo,
      created_at,
      updated_at
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `
  )
    .bind(
      id,
      payload.meeting_title,
      payload.action_title,
      payload.owner,
      payload.due_date,
      payload.priority,
      payload.status,
      payload.memo,
      now,
      now
    )
    .run();

  return json({
    ok: true,
    task: {
      id,
      ...payload,
      created_at: now,
      updated_at: now,
    },
  });
}

async function updateTask(
  request: Request,
  env: Env,
  id: string
): Promise<Response> {
  const existing = await env.DB.prepare(
    `
    SELECT
      id,
      meeting_title,
      action_title,
      owner,
      due_date,
      priority,
      status,
      memo,
      created_at,
      updated_at
    FROM tasks
    WHERE id = ?
    `
  )
    .bind(id)
    .first<TaskRow>();

  if (!existing) {
    return json(
      {
        ok: false,
        message: "対象のタスクが見つかりません。",
      },
      404
    );
  }

  const body = await readJson<TaskPayload>(request);

  const merged: Required<TaskPayload> = {
    meeting_title: String(body?.meeting_title ?? existing.meeting_title).trim(),
    action_title: String(body?.action_title ?? existing.action_title).trim(),
    owner: String(body?.owner ?? existing.owner).trim(),
    due_date: String(body?.due_date ?? existing.due_date).trim(),
    priority: body?.priority ?? existing.priority,
    status: body?.status ?? existing.status,
    memo: String(body?.memo ?? existing.memo).trim(),
  };

  const payload = normalizePayload(merged);

  if (!payload) {
    return json(
      {
        ok: false,
        message: "更新内容が不正です。",
      },
      400
    );
  }

  const now = new Date().toISOString();

  await env.DB.prepare(
    `
    UPDATE tasks
    SET
      meeting_title = ?,
      action_title = ?,
      owner = ?,
      due_date = ?,
      priority = ?,
      status = ?,
      memo = ?,
      updated_at = ?
    WHERE id = ?
    `
  )
    .bind(
      payload.meeting_title,
      payload.action_title,
      payload.owner,
      payload.due_date,
      payload.priority,
      payload.status,
      payload.memo,
      now,
      id
    )
    .run();

  return json({
    ok: true,
    task: {
      id,
      ...payload,
      created_at: existing.created_at,
      updated_at: now,
    },
  });
}

async function deleteTask(env: Env, id: string): Promise<Response> {
  await env.DB.prepare("DELETE FROM tasks WHERE id = ?").bind(id).run();

  return json({
    ok: true,
    id,
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const method = request.method;

    if (!url.pathname.startsWith("/api")) {
      return json(
        {
          ok: false,
          message: "Not found",
        },
        404
      );
    }

    try {
      if (url.pathname === "/api/health") {
        return json({
          ok: true,
          service: "Meeting Action Tracker D1 API",
        });
      }

      if (url.pathname === "/api/tasks" && method === "GET") {
        return getTasks(env);
      }

      if (url.pathname === "/api/tasks" && method === "POST") {
        return createTask(request, env);
      }

      const taskIdMatch = url.pathname.match(/^\/api\/tasks\/([^/]+)$/);
      const taskId = taskIdMatch?.[1];

      if (taskId && method === "PUT") {
        return updateTask(request, env, taskId);
      }

      if (taskId && method === "DELETE") {
        return deleteTask(env, taskId);
      }

      return json(
        {
          ok: false,
          message: "API route not found",
        },
        404
      );
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unknown server error";

      return json(
        {
          ok: false,
          message,
        },
        500
      );
    }
  },
};