import { motion } from "framer-motion";
import {
  FaRocket,
  FaHeart,
  FaBookmark,
  FaUserCircle,
  FaEye,
  FaCode,
  FaRegHeart,
} from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";
import { useDispatch } from "react-redux";
import {
  likeStartup,
  toggleLike,
  bookmarkStartup,
} from "../features/startup/startupSlice";

const DeveloperStartupCart = ({ startup }) => {
  const { navigate } = useAuth();

  const dispatch = useDispatch();

  const handleLike = (id) => {
    dispatch(toggleLike(id));
  };
  const handleBookmark = (id) => {
    dispatch(bookmarkStartup(id));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      {/* Glow */}
      <div className="absolute -top-24 -right-20 h-56 w-56 rounded-full bg-cyan-500/20 blur-[90px] group-hover:bg-cyan-400/30 transition-all duration-700"></div>

      <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-indigo-500/20 blur-[90px] group-hover:bg-indigo-500/30 transition-all duration-700"></div>

      {/* Gradient Border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

      <div className="relative z-10 p-7 cursor-pointer">
        {/* Top */}

        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <FaRocket className="text-white text-xl" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-white">{startup.title}</h2>

              <p className="text-sm text-slate-400">{startup.category}</p>
            </div>
          </div>

          <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-xs font-semibold text-cyan-300">
            {startup.stage || "Idea"}
          </span>
        </div>

        {/* Description */}

        <p className="mt-3 text-slate-300 leading-7 line-clamp-3">
          {startup.description}
        </p>

        {/* Technology */}

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs text-indigo-300">
            React
          </span>

          <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-300">
            AI
          </span>

          <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs text-purple-300">
            Django
          </span>
        </div>

        {/* Founder */}

        <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-6">
          <FaUserCircle className="text-5xl text-cyan-400" />

          <div>
            <h3 className="font-semibold text-white">{startup.founder}</h3>

            <p className="text-sm text-slate-400">Founder</p>
          </div>
        </div>

        {/* Stats */}

        <div className="mt-4 flex items-center justify-between">
          <motion.button
            onClick={() => handleLike(startup.id)}
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-2"
          >
            {startup.liked ? (
              <FaHeart className="text-red-500 text-xl" />
            ) : (
              <FaRegHeart className="text-white text-xl" />
            )}

            <span className="text-white">{startup.likes}</span>
          </motion.button>
          <motion.button
            onClick={() => handleBookmark(startup.id)}
            whileHover={{ rotate: -10, scale: 1.1 }}
            className="rounded-xl bg-cyan-500/10 p-3 transition"
          >
            <FaBookmark
              className={
                startup.bookmarked
                  ? "text-yellow-400 text-xl"
                  : "text-white text-xl"
              }
            />
          </motion.button>

          <div className="flex items-center gap-2 text-slate-400">
            <FaEye />

            <span>{startup.views || 0}</span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <FaCode />
            <span>{startup.team || "3 Devs"}</span>
          </div>
        </div>

        {/* Footer */}

        <motion.button
          onClick={()=>navigate("/developer/DeveloperExplore")}
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="mt-8 w-full cursor-pointer rounded-2xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 py-3 font-semibold text-white shadow-lg shadow-cyan-500/30 transition"
        >
          Explore
        </motion.button>
      </div>
    </motion.div>
  );
};

export default DeveloperStartupCart;
