import { FaRocket, FaGoogle, FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { naviagte,handleSubmit,register,loginForm } = useAuth();
  return (
    <section className="min-h-screen bg-slate-950 flex">
      {/* LEFT */}

      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-gradient-to-br from-indigo-900 via-slate-900 to-cyan-900">
        {/* Blur */}

        <div className="absolute w-72 h-72 bg-indigo-500/30 rounded-full blur-[120px] top-10 left-10"></div>

        <div className="absolute w-72 h-72 bg-cyan-500/30 rounded-full blur-[120px] bottom-10 right-10"></div>

        {/* Content */}

        <div className="relative z-10 flex flex-col justify-center px-16">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 flex justify-center items-center">
              <FaRocket className="text-white text-2xl" />
            </div>

            <div>
              <h1 className="text-3xl font-semibold text-white">StartupHub</h1>

              <p className="text-slate-300 mt-1">Build. Connect. Grow.</p>
            </div>
          </div>

          <h2 className="text-5xl font-semibold text-white mt-5 ">
            Build Your <br />
            Dream Startup
          </h2>

          <p className="text-slate-400 mt-4 text-lg leading-6 max-w-lg">
            Connect with developers, designers and investors to launch your next
            big startup.
          </p>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-5 mt-10">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-3">
              <h2 className="text-2xl font-semibold text-white flex justify-center items-center">
                2K+
              </h2>

              <p className="text-slate-400 mt-1 flex justify-center items-center">
                Startups
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-3">
              <h2 className="text-2xl font-semibold text-white flex justify-center items-center">
                15K+
              </h2>

              <p className="text-slate-400 mt-1 flex justify-center items-center">
                Developers
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-center p-3">
              <h2 className="text-2xl font-semibold text-white text-center flex justify-center items-center">
                800+
              </h2>

              <p className="text-slate-400 mt-1">Investors</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT */}

      <div className="flex flex-1 justify-center items-center p-6">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
          <h2 className="text-2xl font-semibold  flex justify-center items-center text-white">
            Welcome Back 👋
          </h2>

          <p className="text-slate-400 mt-1 flex justify-center items-center">
            Login to continue your journey.
          </p>

          <form className="space-y-5 mt-2" onSubmit={handleSubmit(loginForm)}>
            <div>
              <div className="mt-7 flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-4">
                <MdOutlineMail className="text-xl text-slate-400" />

                <input
                 {...register("email",{
                    required:"password is required"
                })}
                  type="email"
                  placeholder="Enter email"
                  className="w-full bg-transparent p-3 outline-none text-white placeholder:text-slate-500"
                />
              </div>
            </div>

            <div>
              <div className="mt-2 flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-4">
                <RiLockPasswordLine className="text-xl text-slate-400" />

                <input
                 {...register("password",{
                    required:"password is required"
                })}
                  type="password"
                  placeholder="Enter password"
                  className="w-full bg-transparent p-3 outline-none text-white placeholder:text-slate-500"
                />
              </div>
            </div>

            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-400">
                <input type="checkbox" />
                Remember me
              </label>

              <button
                type="button"
                className="text-cyan-400 hover:text-cyan-300"
              >
                Forgot?
              </button>
            </div>

            <button className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 p-3 cursor-pointer font-semibold text-white transition hover:scale-[1.02]">
              Login
            </button>
          </form>

          <div className="my-7 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-700"></div>

            <span className="text-slate-500 text-sm">OR</span>

            <div className="h-px flex-1 bg-slate-700"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="rounded-xl border border-slate-700 py-3 text-white flex justify-center items-center gap-2 hover:bg-slate-800">
              <FaGoogle />
              Google
            </button>

            <button className="rounded-xl border border-slate-700 py-3 text-white flex justify-center items-center gap-2 hover:bg-slate-800">
              <FaGithub />
              GitHub
            </button>
          </div>

          <p className="text-center text-slate-400 mt-8">
            Don't have an account?
            <Link to="/register" className="text-cyan-400 ml-2">
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
