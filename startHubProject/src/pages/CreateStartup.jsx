import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router";
import {
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaChartLine,
  FaArrowRight,
  FaCheckCircle,
  FaGlobe,
} from "react-icons/fa";

import { addStartup,updateStartup } from "../features/startup/startupSlice";

const CreateStartup = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { startup } = useSelector((state) => state.startup);

  const submitHandler = (data) => {
    if (editStartUp) {
      dispatch(
        updateStartup({
          ...editStartUp,
          ...data,
        }),
      );
      alert("Startup Updated 🚀");
    } else {
      const startupData = {
        id: Date.now(),
        title: data.title,
        category: data.category,
        description: data.description,
        problem: data.problem,
        solution: data.solution,
        technology: data.technology,
        funding: data.funding,
        stage: data.stage,
        team: data.team,
        founder: user?.name || "Unknown",
        likes: 0,
        comments: [],
        bookmarked: false,
        createdAt: new Date().toISOString(),
      };
      dispatch(addStartup(startupData));
      alert("Startup Created 🚀");
    }

    reset();

    navigate("/my-startups");
  };

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const editStartUp = startup.find((item) => item.id == id);

  useEffect(() => {
    if (editStartUp) {
      reset(editStartUp);
    }
  }, [editStartUp]);

  

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816]">
      <div className="absolute inset-0">
        <div className="absolute left-[-200px] top-[-150px] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[170px] animate-pulse"></div>

        <div className="absolute right-[-150px] bottom-[-200px] h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[180px] animate-pulse"></div>

        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[150px]"></div>
      </div>

      {/* GRID */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14">
        <div className="grid items-start gap-16 lg:grid-cols-[1.05fr_.95fr]">
          {/* ================================= */}

          {/* HERO */}

          {/* ================================= */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-cyan-300">
              <FaRocket />
              StartupHub
            </span>

            <h1 className="mt-8 text-5xl font-semibold  text-white">
              Build
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Your Dream Startup
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-lg  text-slate-400">
              Publish your startup idea, recruit talented developers, attract
              investors and launch your next unicorn.
            </p>

            {/* STATS */}

            <div className="mt-6 grid gap-5">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600">
                  <FaLightbulb className="text-3xl text-white" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Share Your Vision
                  </h3>

                  <p className="mt-1 text-slate-400">
                    Publish your startup and reach thousands.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600">
                  <FaUsers className="text-3xl text-white" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Build Your Team
                  </h3>

                  <p className="mt-1 text-slate-400">
                    Find React, Django and AI developers.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-red-500">
                  <FaChartLine className="text-3xl text-white" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Get Funding
                  </h3>

                  <p className="mt-1 text-slate-400">
                    Connect directly with investors.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* FLOATING CARD */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="mt-6 rounded-[35px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 p-5 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-4xl font-semibold text-white">
                    Startup Score
                  </h2>

                  <p className="mt-2 text-slate-400">Ready to launch 🚀</p>
                </div>

                <div className="text-3xl font-semibold text-cyan-400">95%</div>
              </div>

              <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "95%" }}
                  transition={{ duration: 1.5 }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* ================================= */}

          {/* FORM START */}

          {/* ================================= */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-[35px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,255,255,.08)]"
          >
            <h2 className="text-3xl font-semibold text-white">
              Launch Startup
            </h2>

            <p className="mt-1 text-slate-400">
              Fill the details below and publish your startup.
            </p>

            <form
              onSubmit={handleSubmit(submitHandler)}
              className="mt-10 space-y-7"
            >
              {/* Startup Name */}

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <label className="mb-2 block text-sm font-semibold uppercase tracking-widest text-cyan-300">
                  Startup Name
                </label>

                <input
                  {...register("title")}
                  placeholder="Ex. StartupHub AI"
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/60 p-3 text-lg text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20"
                />
              </motion.div>

              {/* Category & Stage */}

              <div className="grid gap-6 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <label className="mb-2 block text-sm font-semibold uppercase tracking-widest text-cyan-300">
                    Category
                  </label>

                  <select
                    {...register("category")}
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-5 p-3 text-white outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20"
                  >
                    <option className="bg-slate-900">AI</option>

                    <option className="bg-slate-900">EdTech</option>

                    <option className="bg-slate-900">FinTech</option>

                    <option className="bg-slate-900">Healthcare</option>

                    <option className="bg-slate-900">Cyber Security</option>

                    <option className="bg-slate-900">Web3</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="mb-2 block text-sm font-semibold uppercase tracking-widest text-cyan-300">
                    Stage
                  </label>

                  <select
                    {...register("stage")}
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-3 text-white outline-none transition-all duration-300 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/20"
                  >
                    <option className="bg-slate-900">Idea</option>

                    <option className="bg-slate-900">Prototype</option>

                    <option className="bg-slate-900">MVP</option>

                    <option className="bg-slate-900">Beta</option>

                    <option className="bg-slate-900">Growth</option>
                  </select>
                </motion.div>
              </div>

              {/* Funding */}

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <label className="mb-2 block text-sm font-semibold uppercase tracking-widest text-cyan-300">
                  Funding Required
                </label>

                <input
                  {...register("funding")}
                  placeholder="₹ 5,00,000"
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-green-400 focus:ring-4 focus:ring-green-500/20"
                />
              </motion.div>

              {/* Technology */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <label className="mb-2 block text-sm font-semibold uppercase tracking-widest text-cyan-300">
                  Technology Stack
                </label>

                <input
                  {...register("technology")}
                  placeholder="React, Django, Python, AI..."
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-purple-400 focus:ring-4 focus:ring-purple-500/20"
                />

                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm text-cyan-300">
                    React
                  </span>

                  <span className="rounded-full bg-indigo-500/20 px-4 py-2 text-sm text-indigo-300">
                    Django
                  </span>

                  <span className="rounded-full bg-pink-500/20 px-4 py-2 text-sm text-pink-300">
                    AI
                  </span>

                  <span className="rounded-full bg-yellow-500/20 px-4 py-2 text-sm text-yellow-300">
                    Node
                  </span>

                  <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm text-green-300">
                    Python
                  </span>
                </div>
              </motion.div>

              {/* Team */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                <label className="mb-2 block text-sm font-semibold uppercase tracking-widest text-cyan-300">
                  Team Required
                </label>

                <input
                  {...register("team")}
                  placeholder="Frontend Developer, UI Designer..."
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-orange-400 focus:ring-4 focus:ring-orange-500/20"
                />
              </motion.div>
              {/* Problem */}

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="mb-2 block text-sm font-semibold uppercase tracking-widest text-cyan-300">
                  Problem Statement
                </label>

                <textarea
                  {...register("problem")}
                  rows={5}
                  placeholder="What problem are you solving?"
                  className="w-full  rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-red-400 focus:ring-4 focus:ring-red-500/20"
                />
              </motion.div>

              {/* Solution */}

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <label className="mb-3 block text-sm font-semibold uppercase tracking-widest text-cyan-300">
                  Solution
                </label>

                <textarea
                  {...register("solution")}
                  rows={5}
                  placeholder="Describe your solution..."
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20"
                />
              </motion.div>

              {/* Description */}

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label className="mb-2 block text-sm font-semibold uppercase tracking-widest text-cyan-300">
                  Startup Description
                </label>

                <textarea
                  {...register("description")}
                  rows={6}
                  placeholder="Tell investors and developers about your startup..."
                  className="w-full  rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/20"
                />
              </motion.div>

              {/* Info Card */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 p-3"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600">
                    <FaGlobe className="text-2xl text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      Global Startup Network
                    </h3>

                    <p className="mt-2 text-slate-300">
                      Reach developers, investors and founders across the world.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Checklist */}

              <div className="grid gap-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <FaCheckCircle className="text-green-400" />
                  Startup visible instantly
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <FaCheckCircle className="text-green-400" />
                  Recruit talented developers
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <FaCheckCircle className="text-green-400" />
                  Connect with investors
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <FaCheckCircle className="text-green-400" />
                  Build your startup community
                </div>
              </div>

              {/* Submit */}

              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 45px rgba(34,211,238,.35)",
                }}
                whileTap={{
                  scale: 0.96,
                }}
                type="submit"
                className="group relative mt-2 w-full overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 p-3 text-lg font-bold text-white"
              >
                <span className="relative cursor-pointer z-10 flex items-center justify-center gap-3">
                  Launch Startup
                  <FaArrowRight className="transition group-hover:translate-x-2" />
                </span>

                <span className="absolute left-[-120%] top-0 h-full w-full bg-white/20 transition-all duration-700 group-hover:left-[120%]"></span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CreateStartup;
