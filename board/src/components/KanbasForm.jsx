
import React from "react";

const KanbanForm = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cyan-500 p-4">

      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl sm:p-8">

        {/* Heading */}
        <div className="mb-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-600">
            Task Manager
          </p>

          <h1 className="text-2xl font-bold text-gray-800">
            Create New Task
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Fill in the details to add a new task.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Task Title */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Task Title
            </label>

            <input
              type="text"
              placeholder="Enter task title"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Description
            </label>

            <textarea
              rows="4"
              placeholder="Describe your task..."
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
            />
          </div>

          {/* Priority */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Priority
            </label>

            <select
              defaultValue=""
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
            >
              <option value="" disabled>
                Select priority
              </option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          {/* Due Date */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Due Date
            </label>

            <input
              type="date"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">

            <button
              type="button"
              className="w-1/2 rounded-lg border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="w-1/2 rounded-lg bg-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-cyan-600"
            >
              + Add Task
            </button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default KanbanForm;
