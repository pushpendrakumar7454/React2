
export default function Header({
  onAdd,
  search,
  setSearch,
  total
}) {
  return (
    <header className="mb-7">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Workspace
          </p>

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            My Task Board
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Plan, organize and get things done.
          </p>
        </div>

        <button
          onClick={onAdd}
          className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
        >
          + Add Task
        </button>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search tasks..."
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <p className="text-sm text-slate-500">
          {total} {total === 1 ? "task" : "tasks"} in your workspace
        </p>
      </div>
    </header>
  );
}
