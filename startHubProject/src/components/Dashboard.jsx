import {
  FaRocket,
  FaArrowRight,
  FaLightbulb,
  FaBookmark,
  FaHeart,
} from "react-icons/fa";

import { useSelector } from "react-redux";
import { useAuth } from "../hooks/useAuth";

const Dashboard = () => {
  const { navigate } = useAuth();

  const { user } = useSelector((state) => state.auth);
  const { startup } = useSelector((state) => state.startup);

 

  const myStartups = startup.filter(
    (item) => item.founder === user?.name
  );

  const bookmarkedStartups = startup.filter(
    (item) => item.bookmarked
  );

  const totalLikes = startup.reduce(
    (total, item) => total + item.likes,
    0
  );

  const totalComments = startup.reduce(
    (total, item) => total + item.comments.length,
    0
  );

  return (
    <div className="min-h-screen bg-slate-950 px-5 py-10">
      <div className="max-w-7xl mx-auto">

        {/* ========================= */}
        {/* Welcome Section */}
        {/* ========================= */}

        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 p-8 md:p-12">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-indigo-600/30 rounded-full blur-[120px] animate-pulse"></div>

          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">

            {/* Left */}

            <div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm">
                <FaRocket />
                Startup Dashboard
              </div>

              <h1 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
                Welcome Back,
                <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  {" "}
                  {user?.name}
                </span>
              </h1>

              <p className="mt-5 text-slate-400 text-lg leading-8 max-w-xl">
                Manage your startups, bookmarks and track your growth from one place.
              </p>

              <div className="flex gap-4 mt-8">

                <button
                  onClick={() => navigate("/create-startup")}
                  className="group flex items-center gap-3 rounded-xl px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold hover:scale-105 transition"
                >
                  Create Startup
                  <FaArrowRight className="group-hover:translate-x-1 transition" />
                </button>

                <button
                  onClick={() => navigate("/")}
                  className="rounded-xl px-6 py-3 border border-white/10 bg-white/5 text-white hover:bg-white/10 transition"
                >
                  Explore Startups
                </button>

              </div>

            </div>
                        {/* Right Card */}

            <div className="relative flex justify-center">
              <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl hover:-translate-y-2 transition">
                <div className="flex justify-between items-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-400 flex items-center justify-center">
                    <FaLightbulb className="text-white text-2xl" />
                  </div>

                  <span className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                    Active
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  Your Startup Journey
                </h3>

                <p className="text-slate-400 mt-3">
                  You have created{" "}
                  <span className="text-cyan-400 font-bold">
                    {myStartups.length}
                  </span>{" "}
                  startups.
                </p>

                <div className="mt-8">
                  <div className="flex justify-between text-sm mb-3">
                    <span className="text-slate-400">Profile Complete</span>

                    <span className="text-cyan-400">85%</span>
                  </div>

                  <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= Stats ================= */}

        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

          {/* My Startups */}

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-2 transition">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center text-white text-xl">
              <FaRocket />
            </div>

            <p className="text-slate-400 mt-5">My Startups</p>

            <h2 className="text-3xl font-bold text-white mt-2">
              {myStartups.length}
            </h2>
          </div>

          {/* Bookmarks */}

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-2 transition">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl">
              <FaBookmark />
            </div>

            <p className="text-slate-400 mt-5">Bookmarks</p>

            <h2 className="text-3xl font-bold text-white mt-2">
              {bookmarkedStartups.length}
            </h2>
          </div>

          {/* Likes */}

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-2 transition">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-white text-xl">
              <FaHeart />
            </div>

            <p className="text-slate-400 mt-5">Total Likes</p>

            <h2 className="text-3xl font-bold text-white mt-2">
              {totalLikes}
            </h2>
          </div>

          {/* Comments */}

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-2 transition">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-xl">
              💬
            </div>

            <p className="text-slate-400 mt-5">Comments</p>

            <h2 className="text-3xl font-bold text-white mt-2">
              {totalComments}
            </h2>
          </div>

        </section>
              </div>
    </div>
  );
};

export default Dashboard;
