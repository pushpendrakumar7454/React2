
export default function Header({
  onAdd,
  search,
  setSearch,
  total
}) {
  return (
    <header className="mb-7 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      {/* Top Section */}
      <div className="flex flex-col justify-between gap-5 p-5 sm:flex-row sm:items-center sm:p-6">

        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-indigo-600"></span>
            <span className="text-xs font-semibold tracking-wide text-indigo-700">
              WORKSPACE
            </span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            My Task Board
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Stay focused. Organize your work. Get things done.
          </p>
        </div>

        <button
          onClick={onAdd}
          className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-100 transition duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-lg sm:self-auto"
        >
          <span className="text-lg leading-none">+</span>
          Add New Task
        </button>

      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-4 border-t border-slate-100 bg-slate-50/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">

        {/* Search */}
        <div className="relative w-full sm:max-w-md">
          <svg
            className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="11" cy="11" r="7" />
            <path
              strokeLinecap="round"
              d="m16 16 4 4"
            />
          </svg>

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search your tasks..."
            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50"
          />
        </div>

        {/* Task Count */}
        <div className="flex items-center gap-3 self-start rounded-xl border border-slate-200 bg-white px-4 py-2.5 sm:self-auto">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"
              />
            </svg>
          </div>

          <div>
            <p className="text-lg font-bold leading-tight text-slate-900">
              {total}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              {total === 1 ? "Total task" : "Total tasks"}
            </p>
          </div>
        </div>

      </div>
    </header>
  );
}
