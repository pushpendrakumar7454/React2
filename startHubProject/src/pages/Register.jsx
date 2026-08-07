import { useState } from "react";
import { Link } from "react-router";
import { FaRocket, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const { handleSubmit, register, watch, registerForm } = useAuth();

  const password = watch("password");

  return (
    <section className="min-h-screen flex bg-slate-950">
      {/* LEFT */}

      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-cyan-950">
        <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/20 blur-[130px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/20 blur-[130px] rounded-full"></div>

        <div className="relative z-10 flex flex-col justify-center px-16">
          <div className="flex items-center gap-4">
            <div className="w-13 h-13 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 flex items-center justify-center">
              <FaRocket className="text-white text-2xl" />
            </div>

            <div>
              <h1 className="text-white text-3xl font-semibold">StartupHub</h1>

              <p className="text-slate-400 mt-1">Launch Ideas Into Reality</p>
            </div>
          </div>

          <h2 className="text-white text-5xl font-small mt-4 ">
            Join The Future Of Innovation
          </h2>

          <p className="text-slate-400 mt-3  max-w-lg">
            Create your account and connect with talented developers, investors
            and startup founders from all over the world.
          </p>

          <div className="grid grid-cols-3 gap-5 mt-16">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
              <h3 className="text-2xl font-semibold text-white flex justify-center items-center">
                2K+
              </h3>

              <p className="text-slate-400 mt-2 flex justify-center items-center">
                Founders
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
              <h3 className="text-2xl font-semibold text-white flex justify-center items-center">
                10K+
              </h3>

              <p className="text-slate-400 mt-2 flex justify-center items-center">
                Developers
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
              <h3 className="text-2xl font-semibold text-white flex justify-center items-center">
                500+
              </h3>

              <p className="text-slate-400 mt-2 flex justify-center items-center">
                Investors
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT */}

      <div className="flex-1 flex justify-center items-center p-6">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
          <h2 className="text-3xl font-semibold text-white">
            Create Account 🚀
          </h2>

          <p className="text-slate-400 mt-1">
            Join StartupHub and build something amazing.
          </p>

          <form
            className="space-y-5 mt-8"
            onSubmit={handleSubmit(registerForm)}
          >
            {/* Name */}

            <div>
              <div className="mt-2 flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-4">
                <HiOutlineUser className="text-slate-400 text-xl" />

                <input
                  {...register("name", {
                    required: "name is required",
                  })}
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-transparent p-3 outline-none text-white placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* Email */}

            <div>
              <div className="mt-2 flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-4">
                <MdOutlineMail className="text-slate-400 text-xl" />

                <input
                  {...register("email", {
                    required: "email is required",
                  })}
                  type="email"
                  placeholder="Enter email"
                  className="w-full bg-transparent p-3 outline-none text-white placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* Password */}

            <div>
              <div className="mt-2 flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-4">
                <RiLockPasswordLine className="text-slate-400 text-xl" />

                <input
                  {...register("password", {
                    required: "password is required",
                  })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                  className="w-full bg-transparent p-3 outline-none text-white placeholder:text-slate-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-slate-400" />
                  ) : (
                    <FaEye className="text-slate-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}

            <div>
              <div className="mt-2 flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-4">
                <RiLockPasswordLine className="text-slate-400 text-xl" />

                <input
                  {...register("confirm", {
                    required: "confirm password is required",
                    validate: (value) => {
                      return value === password || "password do not match";
                    },
                  })}
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm password"
                  className="w-full bg-transparent p-3 outline-none text-white placeholder:text-slate-500"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? (
                    <FaEyeSlash className="text-slate-400" />
                  ) : (
                    <FaEye className="text-slate-400" />
                  )}
                </button>
              </div>
            </div>
            {/* Role */}

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Select Role
              </label>

              <select
                {...register("role", {
                  required: "Role is required",
                })}
                className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 text-white outline-none"
              >
                <option value="">Choose Role</option>
                <option value="founder">Founder</option>
                <option value="developer">Developer</option>
              </select>
            </div>

            <button className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 p-3 text-white font-semibold hover:scale-[1.02] transition">
              Create Account
            </button>
          </form>
          {/* Divider */}

          <div className="my-3 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-700"></div>

            <span className="text-sm text-slate-500">OR CONTINUE WITH</span>

            <div className="h-px flex-1 bg-slate-700"></div>
          </div>

          {/* Social Login */}

          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="flex items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-900 p-3 text-white transition-all duration-300 hover:border-indigo-500 hover:bg-slate-800"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="h-5 w-5"
              />
              Google
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-900 p-3 text-white transition-all duration-300 hover:border-cyan-500 hover:bg-slate-800"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="github"
                className="h-5 w-5 invert"
              />
              GitHub
            </button>
          </div>

          {/* Login */}

          <p className="mt-8 text-center text-slate-400">
            Already have an account?
            <Link
              to="/login"
              className="ml-2 font-semibold text-cyan-400 hover:text-cyan-300"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
