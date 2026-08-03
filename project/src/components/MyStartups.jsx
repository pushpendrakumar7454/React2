import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaSearch,
  FaLayerGroup,
  FaCode,
  FaHeart,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import { useNavigate, useSearchParams } from "react-router";
import { deleteStartup } from "../features/startup/startupSlice";

const MyStartups = () => {
  const { startup } = useSelector((state) => state.startup);
  const { user } = useSelector((state) => state.auth);
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const myStartups = useMemo(() => {
    return startup.filter(
      (item) =>
        item.founder === user?.name &&
        item.title.toLowerCase().includes(search.toLowerCase()) &&
        (category === "All" || item.category === category),
    );
  }, [startup, user, search, category]);


  const deleted=(id)=>{
    dispatch(deleteStartup(id))
    console.log("cicked");
    
  }

     

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-cyan-500/20 blur-[180px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-indigo-600/20 blur-[180px] rounded-full"></div>
      </div>

      {/* Stars */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-10 left-24 w-1 h-1 bg-white rounded-full animate-pulse"></span>

        <span className="absolute top-20 right-52 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></span>

        <span className="absolute top-52 left-1/2 w-1 h-1 bg-indigo-400 rounded-full animate-pulse"></span>

        <span className="absolute bottom-28 left-40 w-1 h-1 bg-cyan-300 rounded-full animate-ping"></span>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative max-w-7xl mx-auto px-6 py-10">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row justify-between gap-8"
        >
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2">
              <FaRocket className="text-cyan-400" />

              <span className="text-cyan-300 font-semibold">
                Founder Dashboard
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-semibold text-white">
              My Startups
            </h1>

            <p className="mt-3 max-w-xl text-slate-400 ">
              Manage every startup you created from one place. Edit, delete and
              monitor your ideas with a modern dashboard.
            </p>
          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 gap-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <FaLayerGroup className="text-2xl text-cyan-400" />

              <h2 className="mt-1 text-3xl font-semibold text-white">
                {myStartups.length}
              </h2>

              <p className="text-slate-400 mt-2">Total Startups</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <FaHeart className="text-2xl text-pink-500" />

              <h2 className="mt-1 text-3xl font-semibold text-white">
                {myStartups.reduce((a, b) => a + b.likes, 0)}
              </h2>

              <p className="text-slate-400 mt-2">Total Likes</p>
            </div>
          </div>
        </motion.div>

        {/* Search + Filter */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col lg:flex-row gap-5"
        >
          <div className="flex-1 relative">
            <FaSearch className="absolute left-5 top-5 text-slate-400" />

            <input
              type="text"
              placeholder="Search your startup..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl bg-white/5 border border-white/10 py-4 pl-14 pr-5 text-white outline-none focus:border-cyan-500"
            />
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-2xl bg-white/5 border border-white/10 px-6 text-white outline-none"
          >
            <option className="bg-slate-900">All</option>
            <option className="bg-slate-900">AI</option>
            <option className="bg-slate-900">Fintech</option>
            <option className="bg-slate-900">EdTech</option>
            <option className="bg-slate-900">Healthcare</option>
          </select>
        </motion.div>
        {/* ================= STARTUP GRID ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 grid lg:grid-cols-2 gap-8"
        >
          {myStartups.length > 0 ? (
            myStartups.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                {/* Glow */}

                <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full bg-cyan-500/10 blur-3xl"></div>

                {/* Header */}

                <div className="relative p-7">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 px-4 py-2 text-sm text-cyan-300">
                        🚀 {item.category}
                      </span>

                      <h2 className="mt-5 text-3xl font-black text-white">
                        {item.title}
                      </h2>

                      <p className="mt-3 text-slate-400 leading-7 line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center shadow-xl shadow-cyan-500/20">
                      <FaRocket className="text-white text-xl" />
                    </div>
                  </div>

                  {/* Info */}

                  <div className="mt-3 grid grid-cols-2 gap-5">
                    <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-4">
                      <p className="text-slate-500 text-xs uppercase">Stage</p>

                      <h3 className="mt-2 text-lg font-bold text-white">
                        {item.stage}
                      </h3>
                    </div>

                    <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-4">
                      <p className="text-slate-500 text-xs uppercase">
                        Funding
                      </p>

                      <h3 className="mt-2 text-lg font-bold text-green-400">
                        {item.funding}
                      </h3>
                    </div>

                    <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-4">
                      <p className="text-slate-500 text-xs uppercase">
                        Technology
                      </p>

                      <h3 className="mt-2 text-white font-semibold">
                        {item.technology}
                      </h3>
                    </div>

                    <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-4">
                      <p className="text-slate-500 text-xs uppercase">Likes</p>

                      <h3 className="mt-2 text-pink-500 text-xl font-bold">
                        ❤️ {item.likes}
                      </h3>
                    </div>
                  </div>

                  {/* Buttons */}

                  <div className="mt-8 flex flex-wrap gap-4">
                    <button className="flex-1 cursor-pointer rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-bold text-white transition hover:scale-105">
                      👁 View Details
                    </button>

                    <button onClick={() => navigate(`/create-startup?id=${item.id}`)} className="rounded-xl cursor-pointer border border-yellow-400/30 bg-yellow-500/10 px-6 py-3 font-semibold text-yellow-300 transition hover:bg-yellow-500 hover:text-white">
                      ✏ Edit
                    </button>

                    <button onClick={()=>deleted(item.id)} className="rounded-xl cursor-pointer border border-red-400/30 bg-red-500/10 px-6 py-3 font-semibold text-red-400 transition hover:bg-red-500 hover:text-white">
                      🗑 Delete
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full flex flex-col items-center justify-center py-24"
            >
              <div className="w-32 h-32 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <FaCode className="text-6xl text-cyan-400" />
              </div>

              <h2 className="mt-8 text-4xl font-black text-white">
                No Startup Found
              </h2>

              <p className="mt-4 max-w-lg text-center leading-8 text-slate-400">
                You haven't created any startup yet. Click below and launch your
                first startup.
              </p>

              <button
                onClick={() => navigate("/create-startup")}
                className="mt-10 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-8 py-4 font-bold text-white shadow-xl shadow-cyan-500/30 transition hover:scale-105"
              >
                🚀 Create Startup
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* ================= FLOATING BUTTON ================= */}

      <motion.button
        whileHover={{
          scale: 1.08,
          rotate: 5,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => navigate("/create-startup")}
        className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-3xl text-white shadow-2xl shadow-cyan-500/30"
      >
        +
      </motion.button>
    </div>
  );
};

export default MyStartups;
