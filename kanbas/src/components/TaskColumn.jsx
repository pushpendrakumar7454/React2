
import TaskCard from "./TaskCard";

const TaskColumn=({
  column,
  tasks,
  onEdit,
  onDelete,
  onStatusChange
})=> {
  const headerColors = {
    todo: "bg-slate-200",
    progress: "bg-blue-500",
    completed: "bg-emerald-500"
  };

  return (
    <section className="min-w-0 rounded-2xl border border-slate-200 bg-slate-100/70 p-3 sm:p-4">
      <div className="mb-4 flex items-center justify-between gap-2">
        <div>
          <h2 className="font-semibold text-slate-800">
            {column.title}
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            {column.description}
          </p>
        </div>

        <span className="rounded-lg bg-white px-3 py-1 text-sm font-semibold text-slate-600">
          {tasks.length}
        </span>
      </div>

      <div className={`mb-4 h-1 rounded-full ${headerColors[column.id]}`} />

      <div className="space-y-3">
        {tasks.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white/70 px-3 py-8 text-center">
            <p className="text-sm text-slate-400">
              No tasks here yet
            </p>
          </div>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
              onStatusChange={onStatusChange}
            />
          ))
        )}
      </div>
    </section>
  );
}
export default TaskColumn