
import TaskColumn from "./TaskColumn";

const columns = [
  {
    id: "todo",
    title: "Todo",
    description: "Things to get started"
  },
  {
    id: "progress",
    title: "In Progress",
    description: "Currently working on"
  },
  {
    id: "completed",
    title: "Completed",
    description: "Successfully finished"
  }
];

export default function KanbanBoard({
  tasks,
  search,
  onEdit,
  onDelete,
  onStatusChange
}) {
  return (
    <section className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
      {columns.map((column) => {
        const columnTasks = [];

        for (const task of tasks) {
          const matchesStatus = task.status === column.id;

          const matchesSearch =
            task.title.toLowerCase().includes(search.toLowerCase()) ||
            task.description.toLowerCase().includes(search.toLowerCase());

          if (matchesStatus && matchesSearch) {
            columnTasks.push(task);
          }
        }

        return (
          <TaskColumn
            key={column.id}
            column={column}
            tasks={columnTasks}
            onEdit={onEdit}
            onDelete={onDelete}
            onStatusChange={onStatusChange}
          />
        );
      })}
    </section>
  );
}
