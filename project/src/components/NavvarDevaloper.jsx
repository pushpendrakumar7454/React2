import React, { useState } from "react";
import { NavLink } from "react-router";
import {
  FaCode,
  FaRocket,
  FaBookmark,
  FaFileAlt,
  FaUserCircle,
  FaSignOutAlt,
  FaSearch,
  FaBell,
  FaEnvelope,
  FaTimes ,
    FaBars


} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../features/auth/authSlice";

const NavvarDevaloper = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  

const [open, setOpen] = useState(false);

  const logoutHandler = () => {
    localStorage.removeItem("loggedinUser");
    dispatch(removeUser());
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between ">

        {/* Logo */}

        <NavLink
          to="/developer"
          
          className="flex items-center gap-3"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600">
            <FaCode className="text-xl text-white" />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              DevHub
            </h2>

            <p className="text-xs text-slate-400">
              Developer Panel
            </p>
          </div>
        </NavLink>

        {/* Menu */}

        <div className="hidden items-center gap-8 lg:flex">

          <NavLink
            to="/developer"
            end
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "text-cyan-400"
                  : "text-slate-300 hover:text-cyan-400"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/developer/DeveloperExplore"

            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "text-cyan-400"
                  : "text-slate-300 hover:text-cyan-400"
              }`
            }
          >
            <div className="flex items-center gap-2">
              <FaRocket />
              Explore
            </div>
          </NavLink>

          <NavLink
            to="/bookmarks"
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "text-cyan-400"
                  : "text-slate-300 hover:text-cyan-400"
              }`
            }
          >
            <div className="flex items-center gap-2">
              <FaBookmark />
              Bookmarks
            </div>
          </NavLink>

          <NavLink
            to="/applications"
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "text-cyan-400"
                  : "text-slate-300 hover:text-cyan-400"
              }`
            }
          >
            <div className="flex items-center gap-2">
              <FaFileAlt />
              Applications
            </div>
          </NavLink>

        </div>
                {/* Search */}

       

        {/* Right Side */}

        <div className="hidden lg:flex items-center gap-5">
          {/* Notifications */}

          <button className="relative rounded-xl border border-slate-700 bg-slate-900 p-3 text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400">
            <FaBell />

            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-red-500"></span>
          </button>

          {/* Messages */}

          <button className="rounded-xl border border-slate-700 bg-slate-900 p-3 text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400">
            <FaEnvelope />
          </button>

          {/* Profile */}

          <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600">
              <FaUserCircle className="text-2xl text-white" />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                {user?.name}
              </h3>

              <p className="text-xs text-slate-400">
                Developer
              </p>
            </div>
          </div>

          {/* Logout */}

          <button
            onClick={logoutHandler}
            className="rounded-xl bg-red-500/20 p-3 text-red-400 transition hover:bg-red-500 hover:text-white"
          >
            <FaSignOutAlt />
          </button>
        </div>

        {/* Mobile Menu */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}

      {open && (
        <div className="border-t border-white/10 bg-slate-950 lg:hidden">
          <div className="flex flex-col p-5 gap-4">

            <NavLink
              to="/developer"
              className="text-slate-300 hover:text-cyan-400"
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/find-startups"
              className="text-slate-300 hover:text-cyan-400"
            >
              Find Startups
            </NavLink>

            <NavLink
              to="/applications"
              className="text-slate-300 hover:text-cyan-400"
            >
              Applications
            </NavLink>

            <NavLink
              to="/saved-startups"
              className="text-slate-300 hover:text-cyan-400"
            >
              Saved
            </NavLink>

            <button
              
              className="rounded-xl bg-red-500 py-3 text-white"
            >
              Logout
            </button>

          </div>
        </div>
      )}
    </nav>
  );
};

export default NavvarDevaloper;
