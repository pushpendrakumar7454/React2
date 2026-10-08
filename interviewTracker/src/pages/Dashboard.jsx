import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FiCheckCircle,
  FiClock,
  FiTarget,
  FiTrendingUp,
  FiCode,
  FiGitBranch,
  FiLayers,
  FiBookOpen,
  FiArrowRight,
  FiRotateCcw,
} from "react-icons/fi";
import { Link } from "react-router";

import { resetProgress } from "../features/tracker/trackerSlice.js";

const Dashboard = () => {
  const dispatch = useDispatch();

  const sections = useSelector((state) => state.tracker.sections);

  // Total tasks
  let totalTasks = 0;

  // Completed tasks
  let completedTasks = 0;

  // Section progress
  for (let i = 0; i < sections.length; i++) {
    totalTasks = totalTasks + sections[i].tasks.length;

    for (let j = 0; j < sections[i].tasks.length; j++) {
      if (sections[i].tasks[j].completed) {
        completedTasks++;
      }
    }
  }

  const pendingTasks = totalTasks - completedTasks;

  let progress = 0;

  if (totalTasks > 0) {
    progress = Math.round((completedTasks / totalTasks) * 100);
  }

  const sectionIcons = {
    dsa: <FiCode />,
    git: <FiGitBranch />,
    fullstack: <FiLayers />,
    machine: <FiBookOpen />,
  };

  const sectionLinks = {
    dsa: "/dsa",
    git: "/git",
    fullstack: "/full-stack",
    machine: "/machine-coding",
  };

  return (
    <div className="min-h-[calc(100vh-76px)] bg-slate-950 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* ================= HERO ================= */}
        <div className="mb-8 overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-orange-500" />

                <span className="text-xs font-semibold text-orange-400">
                  Interview Preparation
                </span>
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Welcome to your{" "}
                <span className="text-orange-500">
                  Interview Tracker
                </span>
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
                Stay consistent, complete your weekly tasks and track
                your interview preparation progress in one place.
              </p>
            </div>

            {/* Progress Circle */}
            <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-4 border-slate-800">
                <div
                  className="absolute inset-0 rounded-full border-4 border-orange-500"
                  style={{
                    clipPath: `inset(${100 - progress}% 0 0 0)`,
                  }}
                />

                <div className="text-center">
                  <p className="text-xl font-bold text-white">
                    {progress}%
                  </p>

                  <p className="text-[9px] uppercase tracking-wider text-slate-500">
                    Done
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs font-medium text-slate-500">
                  Overall Progress
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  {completedTasks} of {totalTasks} tasks
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Keep pushing forward
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= STATS ================= */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

          {/* Total */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition hover:-translate-y-1 hover:border-slate-700">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <FiTarget className="text-xl" />
              </div>

              <span className="text-xs font-medium text-slate-500">
                All Tasks
              </span>
            </div>

            <p className="mt-5 text-3xl font-bold text-white">
              {totalTasks}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Total tasks
            </p>
          </div>

          {/* Completed */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition hover:-translate-y-1 hover:border-slate-700">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <FiCheckCircle className="text-xl" />
              </div>

              <span className="text-xs font-medium text-slate-500">
                Completed
              </span>
            </div>

            <p className="mt-5 text-3xl font-bold text-white">
              {completedTasks}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Tasks completed
            </p>
          </div>

          {/* Pending */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition hover:-translate-y-1 hover:border-slate-700">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                <FiClock className="text-xl" />
              </div>

              <span className="text-xs font-medium text-slate-500">
                Pending
              </span>
            </div>

            <p className="mt-5 text-3xl font-bold text-white">
              {pendingTasks}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Tasks remaining
            </p>
          </div>

          {/* Progress */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition hover:-translate-y-1 hover:border-slate-700">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                <FiTrendingUp className="text-xl" />
              </div>

              <span className="text-xs font-medium text-slate-500">
                Progress
              </span>
            </div>

            <p className="mt-5 text-3xl font-bold text-white">
              {progress}%
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Overall completion
            </p>
          </div>
        </div>

        {/* ================= SECTION TITLE ================= */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">
              Preparation Sections
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Track your progress across every category.
            </p>
          </div>

          <button
            onClick={() => dispatch(resetProgress())}
            className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-xs font-semibold text-slate-400 transition hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
          >
            <FiRotateCcw />
            <span className="hidden sm:block">
              Reset
            </span>
          </button>
        </div>

        {/* ================= SECTION CARDS ================= */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          {sections.map((section) => {
            let completed = 0;

            for (let i = 0; i < section.tasks.length; i++) {
              if (section.tasks[i].completed) {
                completed++;
              }
            }

            const total = section.tasks.length;

            let sectionProgress = 0;

            if (total > 0) {
              sectionProgress = Math.round(
                (completed / total) * 100
              );
            }

            return (
              <Link
                key={section.id}
                to={sectionLinks[section.id]}
                className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-slate-900 hover:shadow-xl hover:shadow-orange-500/5 sm:p-6"
              >
                {/* Card Top */}
                <div className="flex items-start justify-between">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-xl text-orange-400 transition group-hover:bg-orange-500 group-hover:text-white">
                      {sectionIcons[section.id]}
                    </div>

                    <div>
                      <h3 className="font-bold text-white">
                        {section.title}
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        {completed} of {total} completed
                      </p>
                    </div>
                  </div>

                  <FiArrowRight className="text-slate-600 transition duration-300 group-hover:translate-x-1 group-hover:text-orange-400" />
                </div>

                {/* Progress */}
                <div className="mt-6">

                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500">
                      Progress
                    </span>

                    <span className="text-xs font-bold text-orange-400">
                      {sectionProgress}%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500"
                      style={{
                        width: `${sectionProgress}%`,
                      }}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;