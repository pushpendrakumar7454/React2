import React from "react";
import { NavLink } from "react-router";
import {
  FiBookOpen,
  FiHome,
  FiCode,
  FiGitBranch,
  FiLayers,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useState } from "react";

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
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Header */}
        <div className="flex h-18 items-center justify-between">

          {/* Logo */}
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3"
          >
            {/* Logo Box */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-600 shadow-lg shadow-orange-500/20">
              <span className="text-sm font-black tracking-tight text-white">
                IP
              </span>
            </div>

            {/* Logo Text */}
            <div className="hidden sm:block">
              <h2 className="text-lg font-bold leading-tight text-white">
                Interview Tracker
              </h2>

              <p className="text-xs font-medium text-slate-400">
                Practice. Track. Improve.
              </p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 rounded-2xl border border-slate-800 bg-slate-900/70 p-1.5 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                <span className="text-base">{item.icon}</span>
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-orange-500 hover:text-orange-400 lg:hidden"
          >
            {isOpen ? (
              <FiX className="text-xl" />
            ) : (
              <FiMenu className="text-xl" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-slate-800 py-4 lg:hidden">
            <nav className="flex flex-col gap-1.5">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-orange-500 text-white"
                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                    }`
                  }
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.name}
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