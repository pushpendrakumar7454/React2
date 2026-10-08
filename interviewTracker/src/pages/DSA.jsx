import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiCheckCircle, FiCircle, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router";
import { toggleTask } from "../features/tracker/trackerSlice.js";

const DSA = () => {
  const dispatch = useDispatch();

  const sections = useSelector((state) => state.tracker.sections);
  let dsaSection = null;

  for (let i = 0; i < sections.length; i++) {
    if (sections[i].id === "dsa") {
      dsaSection = sections[i];
      break;
    }
  }

  let completedTasks = 0;

  for (let i = 0; i < dsaSection.tasks.length; i++) {
    if (dsaSection.tasks[i].completed) {
      completedTasks++;
    }
  }

  const totalTasks = dsaSection.tasks.length;

  let progress = 0;

  if (totalTasks > 0) {
    progress = Math.round((completedTasks / totalTasks) * 100);
  }

  const handleToggle = (taskId) => {
    dispatch(
      toggleTask({
        sectionId: "dsa",
        taskId: taskId,
      })
    );
  };

  return (
    <div className="min-h-[calc(100vh-76px)] bg-slate-950 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">

        {/* Back Button */}
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-orange-400"
        >
          <FiArrowLeft />
          Back to Dashboard
        </Link>

        {/* Header Card */}
        <div className="mb-6 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-8">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <div className="mb-3 inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1">
                <span className="text-xs font-semibold text-orange-400">
                  DSA Practice
                </span>
              </div>

              <h1 className="text-3xl font-bold text-white sm:text-4xl">
                Data Structures & Algorithms
              </h1>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Solve the assigned DSA problems and mark them as
                completed after submission.
              </p>
            </div>

            {/* Progress */}
            <div className="shrink-0 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-center">
              <p className="text-3xl font-bold text-orange-500">
                {progress}%
              </p>

              <p className="mt-1 text-xs text-slate-500">
                {completedTasks} / {totalTasks} completed
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="h-2 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Tasks */}
        <div className="space-y-3">

          {dsaSection.tasks.map((task, index) => (
            <div
              key={task.id}
              className={`group flex items-center gap-4 rounded-2xl border p-4 transition-all duration-200 sm:p-5 ${
                task.completed
                  ? "border-emerald-500/20 bg-emerald-500/5"
                  : "border-slate-800 bg-slate-900/70 hover:border-orange-500/30 hover:bg-slate-900"
              }`}
            >
              {/* Checkbox */}
              <button
                type="button"
                onClick={() => handleToggle(task.id)}
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all ${
                  task.completed
                    ? "bg-emerald-500/15 text-emerald-400"
                    : "bg-slate-800 text-slate-500 hover:bg-orange-500/10 hover:text-orange-400"
                }`}
              >
                {task.completed ? (
                  <FiCheckCircle className="text-xl" />
                ) : (
                  <FiCircle className="text-xl" />
                )}
              </button>

              {/* Task Number */}
              <div className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-xs font-bold text-slate-500 sm:flex">
                {index + 1}
              </div>

              {/* Task Name */}
              <div className="min-w-0 flex-1">
                <h2
                  className={`text-sm font-semibold sm:text-base ${
                    task.completed
                      ? "text-slate-500 line-through"
                      : "text-white"
                  }`}
                >
                  {task.title}
                </h2>

                <p className="mt-1 text-xs text-slate-600">
                  LeetCode Problem
                </p>
              </div>

              {/* Status */}
              <div className="hidden sm:block">
                {task.completed ? (
                  <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                    Completed
                  </span>
                ) : (
                  <span className="rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Pending
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
          <p className="text-center text-xs leading-5 text-slate-500">
            Complete a problem on LeetCode first, then mark it as
            completed here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DSA;
