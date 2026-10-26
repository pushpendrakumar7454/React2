
import React from "react";

const Task = ({ task,onDelete}) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 p-6">
      {task.map((item) => (
        <div
          key={item.id}
          className="rounded-xl border border-cyan-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          {/* Header */}
          <div className="mb-4 flex items-start justify-between gap-3">
            <h2 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h2>

            <span
              className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                item.priority === "High"
                  ? "bg-red-100 text-red-600"
                  : item.priority === "Medium"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {item.priority}
            </span>
          </div>

          {/* Description */}
          <p className="mb-5 min-h-12 text-sm leading-6 text-gray-500">
            {item.description}
          </p>

          {/* Due Date & Status */}
          <div className="flex items-center justify-between gap-3 border-t border-gray-100 pt-4">
            <div>
              <p className="mb-1 text-xs text-gray-400">
                Due Date
              </p>

              <p className="text-sm font-medium text-gray-700">
                {item.dueDate || "No due date"}
              </p>
            </div>

            <span className="rounded-lg bg-cyan-50 px-3 py-2 text-xs font-semibold text-cyan-700">
              {item.status || "To Do"}
            </span>
          </div>

          {/* Edit & Delete Buttons */}
          <div className="mt-5 flex gap-3">
            <button
              type="button"
           
              className="flex-1 rounded-lg border border-cyan-500 px-4 py-2 text-sm font-semibold text-cyan-600 transition hover:bg-cyan-500 hover:text-white"
            >
              Edit
            </button>

            <button
              type="button"
              onClick={()=>onDelete(task.id)}
           
              className="flex-1 rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Task;
