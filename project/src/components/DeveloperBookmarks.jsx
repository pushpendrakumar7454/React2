import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeBookmark,
  applyStartup,
} from "../features/developer/developerSlice";

import {
  FaBookmark,
  FaRocket,
  FaSearch,
  FaUser,
  FaTrash,
} from "react-icons/fa";

const DeveloperBookmarks = () => {
  const dispatch = useDispatch();

  const bookmarks = useSelector((state) => state.developer.bookMarks);

  const [search, setSearch] = useState("");

  const filteredBookmarks = bookmarks.filter(
    (startup) =>
      startup.title.toLowerCase().includes(search.toLowerCase()) ||
      startup.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 p-6">

      {/* Heading */}

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">
          My Bookmarks 📑
        </h1>

        <p className="text-slate-400 mt-2">
          All your saved startups are here.
        </p>
      </div>

      {/* Search + Count */}

      <div className="flex flex-col md:flex-row justify-between gap-5 mb-8">

        <div className="relative flex-1">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            placeholder="Search Bookmark..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-12 pr-4 text-white outline-none focus:border-cyan-500"
          />

        </div>

        <div className="rounded-xl bg-cyan-500/20 px-6 py-3 text-cyan-400 font-semibold">
          Total : {bookmarks.length}
        </div>

      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {filteredBookmarks.map((startup) => (

          <div
            key={startup.id}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6 hover:border-cyan-500 transition"
          >

            <div className="flex items-center gap-3">

              <div className="h-12 w-12 rounded-2xl bg-cyan-500/20 flex justify-center items-center">
                <FaRocket className="text-cyan-400 text-xl" />
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">
                  {startup.title}
                </h2>

                <p className="text-slate-400">
                  {startup.category}
                </p>
              </div>

            </div>

            <p className="text-slate-300 mt-5 line-clamp-3">
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
                onClick={() => dispatch(removeBookmark(startup.id))}
                className="rounded-xl bg-red-500/20 px-4 py-3 text-red-400 hover:bg-red-500 hover:text-white transition"
              >
                <FaTrash />
              </button>

              <button
                className="rounded-xl bg-yellow-500/20 px-4 py-3 text-yellow-400"
              >
                <FaBookmark />
              </button>

              <button
                onClick={() => dispatch(applyStartup(startup))}
                className="rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-6 py-3 text-white font-semibold hover:scale-105 transition"
              >
                Apply
              </button>

            </div>

          </div>

        ))}

        {filteredBookmarks.length === 0 && (

          <div className="col-span-full text-center py-24">

            <FaBookmark className="mx-auto text-6xl text-slate-600" />

            <h2 className="text-3xl font-bold text-white mt-5">
              No Bookmarks Yet
            </h2>

            <p className="text-slate-400 mt-3">
              Save startups from Explore page to see them here.
            </p>

          </div>

        )}

      </div>

    </div>
  );
};

export default DeveloperBookmarks;