import { useEffect, useMemo, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
  AlertTriangle,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Cloud,
  Database,
  Loader2,
  Plus,
  RefreshCcw,
  Trash2,
} from "lucide-react";

type Priority = "high" | "medium" | "low";
type Status = "todo" | "doing" | "done";

type Task = {
  id: string;
  meeting_title: string;
  action_title: string;
  owner: string;
  due_date: string;
  priority: Priority;
  status: Status;
  memo: string;
  created_at: string;
  updated_at: string;
};

type TaskForm = {
  meeting_title: string;
  action_title: string;
  owner: string;
  due_date: string;
  priority: Priority;
  status: Status;
  memo: string;
};

const initialForm: TaskForm = {
  meeting_title: "",
  action_title: "",
  owner: "",
  due_date: "",
  priority: "medium",
  status: "todo",
  memo: "",
};

const statusLabels: Record<Status, string> = {
  todo: "未着手",
  doing: "進行中",
  done: "完了",
};

const priorityLabels: Record<Priority, string> = {
  high: "高",
  medium: "中",
  low: "低",
};

function isOverdue(task: Task): boolean {
  if (task.status === "done") return false;
  if (!task.due_date) return false;

  const endOfDueDate = new Date(`${task.due_date}T23:59:59`);
  return endOfDueDate.getTime() < Date.now();
}

function formatDate(date: string): string {
  if (!date) return "-";
  return date.replaceAll("-", "/");
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [form, setForm] = useState<TaskForm>(initialForm);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const stats = useMemo(() => {
    const total = tasks.length;
    const todo = tasks.filter((task) => task.status === "todo").length;
    const doing = tasks.filter((task) => task.status === "doing").length;
    const done = tasks.filter((task) => task.status === "done").length;
    const overdue = tasks.filter(isOverdue).length;

    return { total, todo, doing, done, overdue };
  }, [tasks]);

  const groupedTasks = useMemo(() => {
    return {
      active: tasks.filter((task) => task.status !== "done"),
      done: tasks.filter((task) => task.status === "done"),
    };
  }, [tasks]);

  async function fetchTasks() {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/tasks");
      const data = (await response.json()) as {
        ok: boolean;
        tasks?: Task[];
        message?: string;
      };

      if (!response.ok || !data.ok) {
        throw new Error(data.message ?? "タスク取得に失敗しました。");
      }

      setTasks(data.tasks ?? []);
    } catch (error) {
      const text =
        error instanceof Error
          ? error.message
          : "不明なエラーが発生しました。";
      setMessage(text);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.currentTarget;
    setForm((prev) => ({ ...prev, [name]: value } as TaskForm));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !form.meeting_title.trim() ||
      !form.action_title.trim() ||
      !form.owner.trim() ||
      !form.due_date
    ) {
      setMessage("会議名・アクション・担当者・期限は必須です。");
      return;
    }

    setSaving(true);
    setMessage("");

    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as {
        ok: boolean;
        task?: Task;
        message?: string;
      };

      if (!response.ok || !data.ok || !data.task) {
        throw new Error(data.message ?? "保存に失敗しました。");
      }

      setTasks((prev) => [data.task as Task, ...prev]);
      setForm(initialForm);
      setMessage("D1にアクションを保存しました。");
    } catch (error) {
      const text =
        error instanceof Error
          ? error.message
          : "不明なエラーが発生しました。";
      setMessage(text);
    } finally {
      setSaving(false);
    }
  }

  async function updateTask(id: string, patch: Partial<TaskForm>) {
    const current = tasks.find((task) => task.id === id);
    if (!current) return;

    const nextPayload: TaskForm = {
      meeting_title: patch.meeting_title ?? current.meeting_title,
      action_title: patch.action_title ?? current.action_title,
      owner: patch.owner ?? current.owner,
      due_date: patch.due_date ?? current.due_date,
      priority: patch.priority ?? current.priority,
      status: patch.status ?? current.status,
      memo: patch.memo ?? current.memo,
    };

    setMessage("");

    try {
      const response = await fetch(`/api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(nextPayload),
      });

      const data = (await response.json()) as {
        ok: boolean;
        task?: Task;
        message?: string;
      };

      if (!response.ok || !data.ok || !data.task) {
        throw new Error(data.message ?? "更新に失敗しました。");
      }

      setTasks((prev) =>
        prev.map((task) => (task.id === id ? (data.task as Task) : task))
      );
    } catch (error) {
      const text =
        error instanceof Error
          ? error.message
          : "不明なエラーが発生しました。";
      setMessage(text);
    }
  }

  async function deleteTask(id: string) {
    setMessage("");

    try {
      const response = await fetch(`/api/tasks/${id}`, {
        method: "DELETE",
      });

      const data = (await response.json()) as {
        ok: boolean;
        message?: string;
      };

      if (!response.ok || !data.ok) {
        throw new Error(data.message ?? "削除に失敗しました。");
      }

      setTasks((prev) => prev.filter((task) => task.id !== id));
      setMessage("アクションを削除しました。");
    } catch (error) {
      const text =
        error instanceof Error
          ? error.message
          : "不明なエラーが発生しました。";
      setMessage(text);
    }
  }

  function nextStatus(status: Status): Status {
    if (status === "todo") return "doing";
    if (status === "doing") return "done";
    return "todo";
  }

  return (
    <main className="app">
      <section className="hero">
        <div>
          <p className="eyebrow">
            <Cloud size={16} />
            Cloudflare Workers + D1
          </p>
          <h1>Meeting Action Tracker D1</h1>
          <p className="heroText">
            会議後のアクションを、担当者・期限・優先度・ステータスで管理する
            SQL保存型のタスクダッシュボードです。
          </p>
          <div className="heroBadges">
            <span>React</span>
            <span>TypeScript</span>
            <span>Worker API</span>
            <span>Cloudflare D1</span>
            <span>SQL</span>
          </div>
        </div>

        <div className="heroCard">
          <Database size={28} />
          <p>保存先</p>
          <strong>Cloudflare D1</strong>
          <small>API経由でSQL保存</small>
        </div>
      </section>

      <section className="statsGrid">
        <div className="statCard">
          <span>総件数</span>
          <strong>{stats.total}</strong>
        </div>
        <div className="statCard">
          <span>未着手</span>
          <strong>{stats.todo}</strong>
        </div>
        <div className="statCard">
          <span>進行中</span>
          <strong>{stats.doing}</strong>
        </div>
        <div className="statCard">
          <span>完了</span>
          <strong>{stats.done}</strong>
        </div>
        <div className={`statCard ${stats.overdue > 0 ? "danger" : ""}`}>
          <span>期限切れ</span>
          <strong>{stats.overdue}</strong>
        </div>
      </section>

      <section className="layout">
        <form className="panel formPanel" onSubmit={handleSubmit}>
          <div className="sectionTitle">
            <Plus size={20} />
            <h2>アクション登録</h2>
          </div>

          <label>
            会議名
            <input
              name="meeting_title"
              value={form.meeting_title}
              onChange={handleChange}
              placeholder="例：5月度 業務改善ミーティング"
            />
          </label>

          <label>
            アクション内容
            <input
              name="action_title"
              value={form.action_title}
              onChange={handleChange}
              placeholder="例：CSV取込エラー時の表示文言を改善する"
            />
          </label>

          <div className="twoColumns">
            <label>
              担当者
              <input
                name="owner"
                value={form.owner}
                onChange={handleChange}
                placeholder="例：佐藤"
              />
            </label>

            <label>
              期限
              <input
                name="due_date"
                type="date"
                value={form.due_date}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="twoColumns">
            <label>
              優先度
              <select
                name="priority"
                value={form.priority}
                onChange={handleChange}
              >
                <option value="high">高</option>
                <option value="medium">中</option>
                <option value="low">低</option>
              </select>
            </label>

            <label>
              ステータス
              <select name="status" value={form.status} onChange={handleChange}>
                <option value="todo">未着手</option>
                <option value="doing">進行中</option>
                <option value="done">完了</option>
              </select>
            </label>
          </div>

          <label>
            メモ
            <textarea
              name="memo"
              value={form.memo}
              onChange={handleChange}
              placeholder="補足・確認事項・次回MTGまでのメモ"
              rows={5}
            />
          </label>

          <button className="primaryButton" type="submit" disabled={saving}>
            {saving ? (
              <>
                <Loader2 className="spin" size={18} />
                保存中...
              </>
            ) : (
              <>
                <Plus size={18} />
                D1に保存
              </>
            )}
          </button>

          {message && <p className="message">{message}</p>}
        </form>

        <section className="panel listPanel">
          <div className="listHeader">
            <div className="sectionTitle">
              <ClipboardList size={20} />
              <h2>アクション一覧</h2>
            </div>

            <button className="ghostButton" type="button" onClick={fetchTasks}>
              {loading ? (
                <Loader2 className="spin" size={16} />
              ) : (
                <RefreshCcw size={16} />
              )}
              再取得
            </button>
          </div>

          {loading ? (
            <div className="empty">
              <Loader2 className="spin" size={24} />
              <p>D1から読み込み中...</p>
            </div>
          ) : tasks.length === 0 ? (
            <div className="empty">
              <ClipboardList size={32} />
              <p>まだアクションがありません。</p>
              <small>左のフォームから登録してください。</small>
            </div>
          ) : (
            <>
              <div className="taskGroup">
                <h3>進行中・未完了</h3>

                {groupedTasks.active.map((task) => (
                  <article
                    key={task.id}
                    className={`taskCard ${
                      isOverdue(task) ? "overdue" : ""
                    }`}
                  >
                    <div className="taskTop">
                      <div>
                        <p className="meeting">{task.meeting_title}</p>
                        <h3>{task.action_title}</h3>
                      </div>

                      <button
                        className="deleteButton"
                        type="button"
                        onClick={() => deleteTask(task.id)}
                        aria-label="削除"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div className="taskMeta">
                      <span>担当：{task.owner}</span>
                      <span>
                        <CalendarDays size={14} />
                        {formatDate(task.due_date)}
                      </span>
                      <span className={`priority ${task.priority}`}>
                        優先度：{priorityLabels[task.priority]}
                      </span>
                    </div>

                    {task.memo && <p className="memo">{task.memo}</p>}

                    <div className="taskFooter">
                      {isOverdue(task) && (
                        <span className="overdueLabel">
                          <AlertTriangle size={14} />
                          期限切れ
                        </span>
                      )}

                      <button
                        className={`statusButton ${task.status}`}
                        type="button"
                        onClick={() =>
                          updateTask(task.id, {
                            status: nextStatus(task.status),
                          })
                        }
                      >
                        {task.status === "done" && <CheckCircle2 size={15} />}
                        {statusLabels[task.status]}
                      </button>
                    </div>
                  </article>
                ))}

                {groupedTasks.active.length === 0 && (
                  <div className="emptyMini">未完了タスクはありません。</div>
                )}
              </div>

              <div className="taskGroup doneGroup">
                <h3>完了済み</h3>

                {groupedTasks.done.map((task) => (
                  <article key={task.id} className="taskCard done">
                    <div className="taskTop">
                      <div>
                        <p className="meeting">{task.meeting_title}</p>
                        <h3>{task.action_title}</h3>
                      </div>

                      <button
                        className="deleteButton"
                        type="button"
                        onClick={() => deleteTask(task.id)}
                        aria-label="削除"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div className="taskMeta">
                      <span>担当：{task.owner}</span>
                      <span>
                        <CalendarDays size={14} />
                        {formatDate(task.due_date)}
                      </span>
                    </div>

                    <div className="taskFooter">
                      <button
                        className="statusButton done"
                        type="button"
                        onClick={() =>
                          updateTask(task.id, {
                            status: nextStatus(task.status),
                          })
                        }
                      >
                        <CheckCircle2 size={15} />
                        完了
                      </button>
                    </div>
                  </article>
                ))}

                {groupedTasks.done.length === 0 && (
                  <div className="emptyMini">完了済みタスクはありません。</div>
                )}
              </div>
            </>
          )}
        </section>
      </section>
    </main>
  );
}