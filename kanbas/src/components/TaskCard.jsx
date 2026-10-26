
const statusOptions = [
  { value: "todo", label: "Todo" },
  { value: "progress", label: "In Progress" },
  { value: "completed", label: "Completed" }
];

const priorityColors = {
  High: "bg-rose-50 text-rose-700",
  Medium: "bg-amber-50 text-amber-700",
  Low: "bg-emerald-50 text-emerald-700"
};

export default function TaskCard({
  task,
  onEdit,
  onDelete,
  onStatusChange
}) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <h3 className="break-words text-sm font-semibold text-slate-800">
          {task.title}
        </h3>

        <span
          className={`shrink-0 rounded-md px-2 py-1 text-[10px] font-semibold ${priorityColors[task.priority]}`}
        >
          {task.priority}
        </span>
      </div>

      <p className="mt-2 whitespace-pre-wrap break-words text-sm leading-6 text-slate-500">
        {task.description || "No description provided."}
      </p>

      <div className="mt-4">
        <label className="mb-1 block text-xs font-medium text-slate-500">
          Task status
        </label>

        <select
          value={task.status}
          onChange={(event) =>
            onStatusChange(task.id, event.target.value)
          }
          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs outline-none focus:border-indigo-400"
        >
          {statusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4 flex items-center justify-end gap-2 border-t border-slate-100 pt-3">
        <button
          onClick={() => onEdit(task)}
          className="rounded-lg px-3 py-2 text-xs font-semibold text-indigo-600 transition hover:bg-indigo-50"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="rounded-lg px-3 py-2 text-xs font-semibold text-rose-600 transition hover:bg-rose-50"
        >
          Delete
        </button>
      </div>
    </article>
  );
}
