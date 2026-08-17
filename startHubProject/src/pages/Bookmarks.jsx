import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { FaBookmark, FaRocket } from "react-icons/fa";

const Bookmarks = () => {
  const navigate = useNavigate();

  const { startup } = useSelector((state) => state.startup);

  const bookmarkedStartups = startup.filter(
    (item) => item.bookmarked
  );

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white flex items-center gap-3">
            <FaBookmark className="text-cyan-400" />
            Bookmarked Startups
          </h1>

          <p className="text-slate-400 mt-2">
            All your saved startups in one place.
          </p>
        </div>

        {bookmarkedStartups.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {bookmarkedStartups.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {item.title}
                    </h2>

                    <p className="text-cyan-400 mt-1">
                      {item.category}
                    </p>
                  </div>

                  <FaRocket className="text-3xl text-cyan-400" />
                </div>

                <p className="text-slate-400 mt-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="mt-6 flex justify-between items-center">
                  <span className="text-red-400">
                    ❤️ {item.likes}
                  </span>

                  <button
                    onClick={() =>
                      navigate(`/productdetail/${item.id}`)
                    }
                    className="px-5 py-2 rounded-xl bg-cyan-500 text-white hover:bg-cyan-600 transition"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32">
            <FaBookmark className="text-7xl text-slate-600" />

            <h2 className="text-3xl font-bold text-white mt-6">
              No Bookmarks Yet
            </h2>

            <p className="text-slate-400 mt-3">
              Save startups to see them here.
            </p>

            <button
              onClick={() => navigate("/")}
              className="mt-8 px-8 py-3 rounded-2xl bg-cyan-500 text-white hover:bg-cyan-600 transition"
            >
              Explore Startups
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
