import React, { useState } from "react";
import { NavLink } from "react-router";
import {
  FiBookOpen,
  FiHome,
  FiCode,
  FiGitBranch,
  FiLayers,
  FiMenu,
  FiX,
  FiArrowUpRight,
} from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: <FiHome />,
    },
    {
      name: "DSA",
      path: "/dsa",
      icon: <FiCode />,
    },
    {
      name: "Git & GitHub",
      path: "/git",
      icon: <FiGitBranch />,
    },
    {
      name: "Full Stack",
      path: "/full-stack",
      icon: <FiLayers />,
    },
    {
      name: "Machine Coding",
      path: "/machine-coding",
      icon: <FiBookOpen />,
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/90 backdrop-blur-2xl">

      {/* Orange glow */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-32 w-72 -translate-x-1/2 rounded-full bg-orange-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= MAIN HEADER ================= */}

        <div className="flex h-[76px] items-center justify-between">

          {/* ================= LOGO ================= */}

          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-3"
          >
            {/* Logo */}
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-orange-500/30 blur-lg transition duration-300 group-hover:bg-orange-500/50" />

              {/* Logo Box */}
              <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-orange-400/30 bg-gradient-to-br from-orange-400 via-orange-500 to-red-600 shadow-xl shadow-orange-500/10 transition duration-300 group-hover:scale-105">

                <span className="text-sm font-black tracking-tight text-white">
                  IP
                </span>
              </div>
            </div>

            {/* Brand */}
            <div className="hidden sm:block">

              <div className="flex items-center gap-2">
                <h1 className="text-[17px] font-bold tracking-tight text-white">
                  Interview Tracker
                </h1>

                <span className="rounded-md border border-orange-500/20 bg-orange-500/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-orange-400">
                  Pro
                </span>
              </div>

              <p className="mt-0.5 text-[11px] font-medium tracking-wide text-slate-500">
                Practice • Track • Improve
              </p>
            </div>
          </NavLink>

          {/* ================= DESKTOP NAV ================= */}

          <nav className="hidden items-center gap-1 rounded-2xl border border-slate-800/80 bg-slate-900/70 p-1.5 shadow-2xl shadow-black/20 lg:flex">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `group relative flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-[13px] font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20"
                      : "text-slate-400 hover:bg-slate-800/80 hover:text-white"
                  }`
                }
              >
                <span className="text-[15px] transition-transform duration-200 group-hover:scale-110">
                  {item.icon}
                </span>

                <span>{item.name}</span>

                {/* Active indicator */}
                <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-white transition-all duration-200 group-[.active]:w-5" />
              </NavLink>
            ))}
          </nav>

          {/* ================= DESKTOP RIGHT SIDE ================= */}

          <div className="hidden items-center gap-3 lg:flex">

            {/* Progress badge */}
            <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />

              <span className="text-xs font-medium text-slate-400">
                Preparation Mode
              </span>
            </div>

            {/* Arrow button */}
            <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-200 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-400">
              <FiArrowUpRight className="text-base" />
            </button>
          </div>

          {/* ================= MOBILE BUTTON ================= */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900 text-slate-300 shadow-lg transition-all duration-200 hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-400 lg:hidden"
          >
            {isOpen ? (
              <FiX className="text-xl" />
            ) : (
              <FiMenu className="text-xl" />
            )}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}

        {isOpen && (
          <div className="border-t border-slate-800/70 py-4 lg:hidden">

            {/* Mobile status */}
            <div className="mb-3 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3">

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

                <span className="text-xs font-medium text-slate-400">
                  Preparation Mode
                </span>
              </div>

              <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400">
                Active
              </span>
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-1.5">

              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20"
                        : "text-slate-400 hover:bg-slate-800/80 hover:text-white"
                    }`
                  }
                >
                  <div className="flex items-center gap-3">

                    <span className="text-lg">
                      {item.icon}
                    </span>

                    <span>{item.name}</span>
                  </div>

                  <FiArrowUpRight className="text-sm opacity-40" />
                </NavLink>
              ))}

            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;