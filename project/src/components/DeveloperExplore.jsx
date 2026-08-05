import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  bookmarkStartup,
  likeStartup,
  applyStartup,
} from "../features/developer/developerSlice";

import {
  FaHeart,
  FaBookmark,
  FaRocket,
  FaUser,
} from "react-icons/fa";

const DeveloperExplore = () => {
  const dispatch = useDispatch();

  // Founder ke startup
  const startups = useSelector((state) => state.startup.startup);
  const handleBookmark = (startup) => {
  console.log("Bookmark Click", startup);
  dispatch(bookmarkStartup(startup));
};

  return (
    <div className="min-h-screen bg-slate-950 p-5">
      <h1 className="text-3xl font-semibold text-white mb-8">
        Explore Startups 
      </h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {startups.map((startup) => (
          <div
            key={startup.id}
            className="bg-slate-900 rounded-3xl border border-slate-800 p-6"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <FaRocket className="text-cyan-400 text-2xl" />

                <div>
                  <h2 className="text-xl font-bold text-white">
                    {startup.title}
                  </h2>

                  <p className="text-slate-400">
                    {startup.category}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-slate-300 mt-4">
              {startup.description}
            </p>

            <div className="flex items-center gap-2 mt-5">
              <FaUser className="text-cyan-400" />

              <span className="text-white">
                {startup.founder}
              </span>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={() => dispatch(likeStartup(startup))}
                className="bg-red-500/20 px-4 py-2 rounded-xl text-red-400 hover:bg-red-500/30"
              >
                <FaHeart />
              </button>

              <button
                onClick={handleBookmark(startup)}
                className="bg-cyan-500/20 px-4 py-2 rounded-xl text-cyan-400 hover:bg-cyan-500/30"
              >
                <FaBookmark />
              </button>

              <button
                onClick={() => dispatch(applyStartup(startup))}
                className="bg-indigo-600 px-5 py-2 rounded-xl text-white"
              >
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperExplore;