
import { useEffect, useState } from "react";
import Header from "./components/Header";
import KanbanBoard from "./components/KanbanBoard";
import TaskForm from "./components/TaskForm";

const initialTasks = [
  {
    id: "1",
    title: "Build project structure",
    description: "Set up React and Tailwind CSS.",
    status: "todo",
    priority: "High"
  },
  {
    id: "2",
    title: "Create task cards",
    description: "Design reusable task components.",
    status: "progress",
    priority: "Medium"
  },
  {
    id: "3",
    title: "Plan the UI",
    description: "Prepare the board layout.",
    status: "completed",
    priority: "Low"
  }
];

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem("kanban-tasks");
      return savedTasks === null
        ? initialTasks
        : JSON.parse(savedTasks);
    } catch {
      return initialTasks;
    }
  });

  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("kanban-tasks", JSON.stringify(tasks));
  }, [tasks]);

  function saveTask(taskData) {
    if (editingTask) {
      setTasks((currentTasks) => {
        const updatedTasks = [];

        for (const task of currentTasks) {
          if (task.id === editingTask.id) {
            updatedTasks.push({
              ...task,
              ...taskData
            });
          } else {
            updatedTasks.push(task);
          }
        }

        return updatedTasks;
      });
    } else {
      const newTask = {
        id: crypto.randomUUID(),
        ...taskData
      };

      setTasks((currentTasks) => [
        newTask,
        ...currentTasks
      ]);
    }

    closeForm();
  }

  function deleteTask(taskId) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmed) return;

    setTasks((currentTasks) => {
      const remainingTasks = [];

      for (const task of currentTasks) {
        if (task.id !== taskId) {
          remainingTasks.push(task);
        }
      }

      return remainingTasks;
    });
  }

  function changeStatus(taskId, newStatus) {
    setTasks((currentTasks) => {
      const updatedTasks = [];

      for (const task of currentTasks) {
        if (task.id === taskId) {
          updatedTasks.push({
            ...task,
            status: newStatus
          });
        } else {
          updatedTasks.push(task);
        }
      }

      return updatedTasks;
    });
  }

  function openEditForm(task) {
    setEditingTask(task);
    setShowForm(true);
  }

  function closeForm() {
    setShowForm(false);
    setEditingTask(null);
  }

  const todoCount = tasks.filter(
    (task) => task.status === "todo"
  ).length;

  const progressCount = tasks.filter(
    (task) => task.status === "progress"
  ).length;

  const completedCount = tasks.filter(
    (task) => task.status === "completed"
  ).length;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
        <Header
          onAdd={() => {
            setEditingTask(null);
            setShowForm(true);
          }}
          search={search}
          setSearch={setSearch}
          total={tasks.length}
        />

        <section className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <SummaryCard
            title="To Do"
            count={todoCount}
            color="bg-slate-100 text-slate-700"
          />
          <SummaryCard
            title="In Progress"
            count={progressCount}
            color="bg-blue-100 text-blue-700"
          />
          <SummaryCard
            title="Completed"
            count={completedCount}
            color="bg-emerald-100 text-emerald-700"
          />
        </section>

        <KanbanBoard
          tasks={tasks}
          search={search}
          onEdit={openEditForm}
          onDelete={deleteTask}
          onStatusChange={changeStatus}
        />

        {showForm && (
          <TaskForm
            task={editingTask}
            onSave={saveTask}
            onClose={closeForm}
          />
        )}

        <footer className="mt-8 text-center text-xs text-slate-400">
          Kanban Board · Organize your work, one task at a time.
        </footer>
      </div>
    </main>
  );
}

function SummaryCard({ title, count, color }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">
          {title}
        </p>
        <span className={`rounded-lg px-3 py-1 text-xs font-semibold ${color}`}>
          {title === "To Do"
            ? "TODO"
            : title === "In Progress"
              ? "ACTIVE"
              : "DONE"}
        </span>
      </div>

      <p className="mt-2 text-2xl font-semibold">{count}</p>
    </div>
  );
}

export default App;
