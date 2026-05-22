CREATE TABLE IF NOT EXISTS tasks (
  id TEXT PRIMARY KEY,
  meeting_title TEXT NOT NULL,
  action_title TEXT NOT NULL,
  owner TEXT NOT NULL,
  due_date TEXT NOT NULL,
  priority TEXT NOT NULL,
  status TEXT NOT NULL,
  memo TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
) STRICT;

CREATE INDEX IF NOT EXISTS idx_tasks_status ON tasks(status);
CREATE INDEX IF NOT EXISTS idx_tasks_due_date ON tasks(due_date);
CREATE INDEX IF NOT EXISTS idx_tasks_priority ON tasks(priority);