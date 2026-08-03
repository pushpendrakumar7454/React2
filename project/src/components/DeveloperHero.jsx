import { motion } from "framer-motion";
import { FaRocket, FaArrowRight, FaCode, FaLightbulb } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";
import { useSelector } from "react-redux";

const DeveloperHero = () => {
  const { navigate } = useAuth();

  const { user } = useSelector((state) => state.auth);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950 p-8 md:p-12">
      {/* Glow */}
      <div className="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]"></div>

      <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-[120px]"></div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-400">
            <FaCode />
            Developer Dashboard
          </div>

          <h1 className="mt-5 text-4xl font-semibold  text-white">
            Welcome Back,
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              {" "}
              {user?.name || "Developer"} 👋
            </span>
          </h1>

          <p className="mt-3 max-w-xl text-[16px]  text-slate-400">
            Find exciting startups, collaborate with talented founders, and
            build amazing products that can change the world.
          </p>

          <div className="mt-5 flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/explore")}
              className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-5 py-3 font-semibold text-white shadow-lg shadow-cyan-500/30"
            >
              Explore Startups
              <FaArrowRight />
            </motion.button>
          </div>

          {/* Mini Stats */}

          <div className="mt-5 flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <FaRocket className="text-cyan-400" />
              <span className="text-slate-300">
                <span className="font-bold text-white">250+</span> Active
                Startups
              </span>
            </div>

            <div className="flex items-center gap-2">
              <FaCode className="text-indigo-400" />
              <span className="text-slate-300">
                <span className="font-bold text-white">500+</span> Developers
              </span>
            </div>

            <div className="flex items-center gap-2">
              <FaLightbulb className="text-yellow-400" />
              <span className="text-slate-300">
                <span className="font-bold text-white">120+</span> Founders
              </span>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="flex justify-center cursor-pointer">
          <motion.div
            whileHover={{ y: -10 }}
            className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between ">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600">
                <FaRocket className="text-xl text-white" />
              </div>

              <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                Available
              </span>
            </div>

            <h2 className="mt-5 text-xl font-semibold text-white">
              Build Your Career 🚀
            </h2>

            <p className="mt-1 text-[15px] text-slate-400">
              Explore innovative startups, contribute your skills, and become a
              part of the next big success story.
            </p>

            <div className="mt-4">
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-slate-400">Developer Profile</span>

                <span className="text-cyan-400">80%</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperHero;
