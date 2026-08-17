import { useState } from "react";
import { NavLink, Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX, HiOutlineBell } from "react-icons/hi";
import {
  FaRocket,
  FaBookmark,
  FaUserCircle,
  FaSignOutAlt,
  FaFileAlt 
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../features/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const [menuOpen, setMenuOpen] = useState(false);

  const logoutHandler = () => {
    localStorage.removeItem("loggedinUser");
    dispatch(removeUser());
  };

  const navItem = ({ isActive }) =>
    `relative px-2 py-2 text-[15px] font-semibold transition-all duration-300 ${
      isActive ? "text-cyan-400" : "text-slate-300 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50">
      {/* Blur Background */}

      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-2xl border-b border-cyan-500/10"></div>

      {/* Stars */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="absolute top-5 left-20 w-1 h-1 rounded-full bg-cyan-400 animate-ping"></span>

        <span className="absolute top-8 right-40 w-1 h-1 rounded-full bg-white"></span>

        <span className="absolute top-12 left-1/2 w-1 h-1 rounded-full bg-indigo-400 animate-pulse"></span>

        <span className="absolute top-3 right-1/4 w-1 h-1 rounded-full bg-cyan-300"></span>
      </div>

      <div className="relative max-w-7xl mx-auto px-2">
        <div className="h-20 flex items-center justify-between">
          {/* ================= LOGO ================= */}

          <Link to="/" className="flex items-center gap-4 group">
            <motion.div
              whileHover={{
                rotate: 15,
                scale: 1.1,
              }}
              transition={{
                duration: 0.3,
              }}
              className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-500 via-indigo-500 to-purple-600 flex items-center justify-center shadow-xl shadow-cyan-500/30"
            >
              <FaRocket className="text-white text-xl" />
            </motion.div>

            <div>
              <h1 className="text-xl font-semibold tracking-wide text-white group-hover:text-cyan-400 transition">
                StartupHub
              </h1>

              <p className="uppercase  text-[10px] text-slate-400">
                Build • Launch • Scale
              </p>
            </div>
          </Link>

          {/* ============ DESKTOP MENU ============ */}

          <nav className="hidden lg:flex items-center gap-5">
            <NavLink to="/" className={navItem}>
              {({ isActive }) => (
                <>
                  Home
                  <motion.span
                    layoutId="activeNav"
                    className={`absolute left-0 -bottom-2 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>

            <NavLink to="/create-startup" className={navItem}>
              {({ isActive }) => (
                <>
                  Create Startup
                  <motion.span
                    layoutId="activeNav2"
                    className={`absolute left-0 -bottom-2 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
            <NavLink to="/my-startups" className={navItem}>
              {({ isActive }) => (
                <>
                  My Startups
                  <motion.span
                    className={`absolute left-0 -bottom-2 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>

            <NavLink to="/bookmarks" className={navItem}>
              {({ isActive }) => (
                <>
                  Bookmarks
                  <motion.span
                    className={`absolute left-0 -bottom-2 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
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
          </nav>

          {/* ================= RIGHT SECTION ================= */}

          <div className="hidden lg:flex items-center gap-4">
            {/* Notification */}

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-11 h-11 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400/40 transition"
            >
              <HiOutlineBell size={22} />

              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            </motion.button>

            {/* User */}

            {user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-3 px-4 py-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
                  <div className="relative">
                    <FaUserCircle size={38} className="text-cyan-400" />

                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-slate-900"></span>
                  </div>

                  <div>
                    <h3 className="text-white text-sm font-bold">
                      {user.name}
                    </h3>

                    <p className="text-xs text-slate-400">Founder</p>
                  </div>
                </div>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={logoutHandler}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold shadow-lg shadow-red-500/20"
                >
                  <FaSignOutAlt />
                  Logout
                </motion.button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  to="/login"
                  className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl text-slate-300 hover:text-white hover:border-cyan-400 transition"
                >
                  Login
                </Link>

                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                >
                  <Link
                    to="/register"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white font-bold shadow-xl shadow-cyan-500/30"
                  >
                    Launch Startup 🚀
                  </Link>
                </motion.div>
              </div>
            )}
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(true)}
            className="lg:hidden w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white"
          >
            <HiOutlineMenuAlt3 size={28} />
          </motion.button>
        </div>
      </div>
      {/* ================= Overlay ================= */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-40"
          />
        )}
      </AnimatePresence>

      {/* ================= Mobile Drawer ================= */}

      <motion.div
        initial={false}
        animate={{
          x: menuOpen ? 0 : "100%",
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 18,
        }}
        className="fixed top-0 right-0 z-50 h-screen w-80 bg-slate-950 border-l border-white/10 lg:hidden"
      >
        {/* Drawer Header */}

        <div className="p-6 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 via-indigo-500 to-purple-600 flex items-center justify-center">
              <FaRocket className="text-white text-xl" />
            </div>

            <div>
              <h2 className="text-white text-xl font-bold">StartupHub</h2>

              <p className="text-xs text-slate-400">Build • Launch • Scale</p>
            </div>
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white"
          >
            <HiOutlineX size={26} />
          </button>
        </div>

        {/* User */}

        {user && (
          <div className="m-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 flex items-center gap-4">
            <div className="relative">
              <FaUserCircle size={50} className="text-cyan-400" />

              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-slate-900"></span>
            </div>

            <div>
              <h3 className="text-white font-bold">{user.name}</h3>

              <p className="text-slate-400 text-sm">Founder</p>
            </div>
          </div>
        )}

        {/* Navigation */}

        <div className="px-5 space-y-3">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `block rounded-xl px-5 py-4 transition-all ${
                isActive
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white"
                  : "text-slate-300 bg-white/5 hover:bg-white/10"
              }`
            }
          >
            🏠 Home
          </NavLink>

          <NavLink
            to="/create-startup"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `block rounded-xl px-5 py-4 transition-all ${
                isActive
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white"
                  : "text-slate-300 bg-white/5 hover:bg-white/10"
              }`
            }
          >
            🚀 Create Startup
          </NavLink>

          <NavLink
            to="/my-startups"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `block rounded-xl px-5 py-4 transition-all ${
                isActive
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white"
                  : "text-slate-300 bg-white/5 hover:bg-white/10"
              }`
            }
          >
            💼 My Startups
          </NavLink>

          <NavLink
            to="/bookmarks"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `block rounded-xl px-5 py-4 transition-all ${
                isActive
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white"
                  : "text-slate-300 bg-white/5 hover:bg-white/10"
              }`
            }
          >
            <div className="flex items-center gap-3">
              <FaBookmark />
              Bookmarks
            </div>
          </NavLink>
          {/* Guest Buttons */}

          {!user && (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="block text-center rounded-xl border border-white/10 bg-white/5 py-4 text-slate-300 hover:bg-white/10 transition-all"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="block text-center rounded-xl py-4 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white font-bold shadow-lg shadow-cyan-500/20"
              >
                🚀 Launch Startup
              </Link>
            </>
          )}

          {/* Logout */}

          {user && (
            <button
              onClick={() => {
                logoutHandler();
                setMenuOpen(false);
              }}
              className="w-full mt-4 flex items-center justify-center gap-3 rounded-xl py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold shadow-lg shadow-red-500/20"
            >
              <FaSignOutAlt />
              Logout
            </button>
          )}
        </div>

        {/* Bottom Glow */}

        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-28 bg-gradient-to-t from-cyan-500/10 via-indigo-500/5 to-transparent"></div>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
