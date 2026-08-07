import React, { useState } from "react";
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
  FaSearch,
} from "react-icons/fa";
import { useNavigate } from "react-router";

const DeveloperExplore = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const startups = useSelector((state) => state.startup.startup);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredStartups = startups.filter((startup) => {
    const matchSearch =
      startup.title.toLowerCase().includes(search.toLowerCase()) ||
      startup.description.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "All" || startup.category === category;

    return matchSearch && matchCategory;
  });

  const handleBookmark = (startup) => {
    dispatch(bookmarkStartup(startup));
  };

  return (
    <div className="min-h-screen bg-slate-950 p-6">

      {/* Heading */}

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">
          Explore Startups 
        </h1>

        <p className="text-slate-400 mt-2">
          Find startups, bookmark your favorites and apply instantly.
        </p>
      </div>

      {/* Search + Filter */}

      <div className="flex flex-col md:flex-row gap-5 mb-10">

        <div className="relative flex-1">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            placeholder="Search Startup..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-12 pr-4 text-white outline-none focus:border-cyan-500"
          />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-white outline-none"
        >
          <option value="All">All</option>
          <option value="AI">AI</option>
          <option value="FinTech">FinTech</option>
          <option value="Education">Education</option>
          <option value="Health">Health</option>
          <option value="E-Commerce">E-Commerce</option>
        </select>
      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {filteredStartups.map((startup) => (
          <div
            key={startup.id}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6 hover:border-cyan-500 transition duration-300"
          >

            {/* Header */}

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

            {/* Description */}

            <p className="text-slate-300 mt-5 line-clamp-3">
              {startup.description}
            </p>

            {/* Founder */}

            <div className="flex items-center gap-2 mt-5">

              <FaUser className="text-cyan-400" />

              <span className="text-white">
                {startup.founder}
              </span>

            </div>

            {/* Buttons */}

            <div className="flex justify-between mt-8">

              <button
                onClick={() => dispatch(likeStartup(startup))}
                className="rounded-xl bg-red-500/20 px-4 py-3 text-red-400 hover:bg-red-500 transition"
              >
                <FaHeart />
              </button>

              <button
                onClick={() => handleBookmark(startup)}
                className="rounded-xl bg-cyan-500/20 px-4 py-3 text-cyan-400 hover:bg-cyan-500 hover:text-white transition"
              >
                <FaBookmark />
              </button>

              <button
                onClick={() => navigate(`/developer/developerapply/${startup.id}`)}
                className="rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-6 py-3 text-white font-semibold hover:scale-105 transition"
              >
                Apply
              </button>

            </div>

          </div>
        ))}

        {/* Empty */}

        {filteredStartups.length === 0 && (
          <div className="col-span-full py-24 text-center">

            <h2 className="text-4xl font-bold text-white">
              No Startup Found 😔
            </h2>

            <p className="mt-3 text-slate-400">
              Try another search or category.
            </p>

          </div>
        )}

      </div>

    </div>
  );
};

export default DeveloperExplore;