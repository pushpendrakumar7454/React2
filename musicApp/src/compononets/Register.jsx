import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { MyContext } from "../context/MyContext";

const Register = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    reset,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const password = watch("password");
  const selectedRole = watch("role");


  const{users,setUsers}=useContext(MyContext)

  const registerForm = (data) => {
      const existUser=users.find((user)=>user.email===data.email)
      if(existUser){
        alert("Email allredy Exit")
        return
      }
    const newUser=[...users,data]
    localStorage.setItem("users",JSON.stringify(newUser))
    setUsers(newUser)
    navigate('/login')
    alert("registration succefull");
    console.log(data);
  };

  return (
    <div className="min-h-screen w-full overflow-hidden bg-[#06120b]">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-emerald-500/20 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-green-400/10 blur-[120px]" />
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[120px]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1700px]">
        {/* ================= LEFT HERO ================= */}
        <div className="relative hidden w-1/2 overflow-hidden lg:flex">
          {/* Hero Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#03140d] via-[#072418] to-[#02110b]" />

          {/* Grid */}
          <div className="absolute inset-0 opacity-[0.05]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* Glow Rings */}
          <div className="absolute -left-40 top-16 h-[420px] w-[420px] rounded-full border border-emerald-500/20 animate-pulse" />
          <div className="absolute -left-24 top-32 h-[340px] w-[340px] rounded-full border border-green-400/20 animate-pulse delay-300" />
          <div className="absolute left-20 bottom-16 h-[250px] w-[250px] rounded-full bg-emerald-500/10 blur-[100px]" />

          {/* Floating Blur */}
          <div className="absolute top-24 right-20 h-40 w-40 rounded-full bg-green-400/20 blur-[70px] animate-bounce" />
          <div className="absolute bottom-24 right-32 h-32 w-32 rounded-full bg-emerald-300/20 blur-[60px] animate-pulse" />

          {/* Content */}
          <div className="relative mt-10 z-20 flex h-full w-full flex-col justify-center px-14">
            <span className="mb-5 w-fit rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-xs tracking-[0.4em] text-emerald-300">
              PREMIUM MUSIC
            </span>

            <h1 className="text-5xl font-semibold leading-tight text-white">
              Feel Every
              <span className="bg-gradient-to-r from-emerald-300 via-green-400 to-lime-300 pl-4 bg-clip-text text-transparent">
                Beat.
              </span>
            </h1>

            <p className="mt-3 max-w-md text-sm leading-7 text-gray-400">
              Discover millions of songs, create playlists, enjoy immersive
              audio and connect with artists around the world.
            </p>

            {/* Stats */}
            <div className="mt-6 flex gap-5">
              <div className="rounded-3xl border border-white/10 bg-white/5 px-7 text-center flex justify-center items-center flex-col backdrop-blur-xl">
                <h2 className="text-2xl font-semibold text-emerald-300">
                  20M+
                </h2>

                <p className="mt-1 text-xs tracking-widest text-gray-400">
                  SONGS
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 px-7 py-5 backdrop-blur-xl">
                <h2 className="text-2xl font-semibold text-emerald-300">
                  150K+
                </h2>

                <p className="mt-1 text-xs tracking-widest text-gray-400">
                  ARTISTS
                </p>
              </div>
            </div>

            {/* Animated Section Placeholder */}
            <div className="relative mt-3 h-[330px] w-full">
              {/* Main Vinyl */}
              <div className="absolute left-12 top-4 flex items-center justify-center">
                <div className="absolute h-[290px] w-[290px] rounded-full bg-emerald-500/20 blur-[90px] animate-pulse" />

                <div className="relative flex h-[250px] w-[250px] animate-[spin_12s_linear_infinite] items-center justify-center rounded-full border-[10px] border-[#1d3328] bg-gradient-to-br from-[#0d1c15] via-[#16261f] to-[#07100c] shadow-[0_0_70px_rgba(16,185,129,.35)]">
                  <div className="absolute h-[190px] w-[190px] rounded-full border border-emerald-400/20" />
                  <div className="absolute h-[145px] w-[145px] rounded-full border border-emerald-300/20" />

                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-emerald-300 to-green-600 shadow-xl" />

                  <div className="absolute h-5 w-5 rounded-full bg-black" />
                </div>
              </div>

              {/* Tone Arm */}
              <div className="absolute left-[230px] top-16 rotate-12">
                <div className="relative h-2 w-40 rounded-full bg-gradient-to-r from-gray-500 to-gray-300">
                  <div className="absolute right-0 top-[-7px] h-5 w-5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-500/60" />
                </div>
              </div>

              {/* Equalizer */}
              <div className="absolute right-8 bottom-8 flex h-36 items-end gap-2">
                <div
                  className="w-2 animate-bounce rounded-full bg-emerald-400"
                  style={{ height: "40%" }}
                />
                <div
                  className="w-2 animate-bounce rounded-full bg-green-300 delay-75"
                  style={{ height: "70%" }}
                />
                <div
                  className="w-2 animate-bounce rounded-full bg-emerald-500 delay-150"
                  style={{ height: "90%" }}
                />
                <div
                  className="w-2 animate-bounce rounded-full bg-lime-300 delay-200"
                  style={{ height: "55%" }}
                />
                <div
                  className="w-2 animate-bounce rounded-full bg-emerald-400 delay-300"
                  style={{ height: "100%" }}
                />
                <div
                  className="w-2 animate-bounce rounded-full bg-green-300 delay-500"
                  style={{ height: "45%" }}
                />
                <div
                  className="w-2 animate-bounce rounded-full bg-emerald-500 delay-700"
                  style={{ height: "80%" }}
                />
              </div>

              {/* Floating Notes */}
              <div className="absolute right-28 top-6 text-5xl text-emerald-300 animate-bounce">
                ♪
              </div>

              <div className="absolute right-10 top-24 text-3xl text-green-400 animate-pulse">
                ♫
              </div>

              <div className="absolute left-72 top-44 text-4xl text-lime-300 animate-bounce">
                ♬
              </div>

              <div className="absolute left-44 bottom-5 text-3xl text-emerald-200 animate-pulse">
                ♩
              </div>

              {/* Floating Cards */}

              <div className="absolute right-0 top-12 w-56 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-2xl">
                <p className="text-xs font-semibold  text-emerald-300">
                  NOW PLAYING
                </p>

                <h3 className="mt-1 text-lg font-semibold text-white">
                  Midnight Beats
                </h3>

                <p className="mt-1 text-sm text-gray-400">Dream Walker</p>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-2/3 rounded-full bg-emerald-400" />
                </div>
              </div>

              <div className="absolute right-16 bottom-0 w-48 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-xl">
                <p className="text-xs text-gray-400">Trending</p>

                <h4 className="mt-2 text-base font-semibold text-white">
                  Green Waves
                </h4>

                <p className="mt-1 text-xs text-emerald-300">2.5M Streams</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT FORM ================= */}
        <form
          className="flex min-h-screen w-full items-center justify-center px-5 py-10 lg:w-1/2"
          onSubmit={handleSubmit(registerForm)}
        >
          <div className="">
            <div className="w-full max-w-md">
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-7 backdrop-blur-3xl shadow-[0_20px_80px_rgba(0,0,0,.45)]">
                {/* Heading */}
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-green-600 text-white text-3xl shadow-lg shadow-emerald-500/40">
                    ♪
                  </div>

                  <h2 className="text-2xl font-semibold text-white">
                    Create Account
                  </h2>

                  <p className="mt-1 text-sm text-gray-400">
                    Join millions of music lovers.
                  </p>
                </div>

                {/* Role */}

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setValue("role", "listener")}
                    className={`rounded-2xl py-2 cursor-pointer text-center transition duration-300 hover:scale-105
                  ${
                    selectedRole === "listener"
                      ? "border border-emerald-400/40 bg-emerald-500/15 shadow-[0_0_25px_rgba(16,185,129,0.25)]"
                      : "border border-white/10 bg-white/5 hover:bg-white/10"
                  }
                  `}
                  >
                    <div className="text-2xl">🎧</div>

                    <p className="mt-1 text-xs font-semibold tracking-[0.3em] text-emerald-300">
                      LISTENER
                    </p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setValue("role", "artist")}
                    className={`rounded-2xl py-2 cursor-pointer text-center transition duration-300 hover:scale-105
                    ${
                      selectedRole === "artist"
                        ? "border border-emerald-400/40 bg-emerald-500/15 shadow-[0_0_25px_rgba(16,185,129,0.25)]"
                        : "border border-white/10 bg-white/5 hover:bg-white/10"
                    }
                    `}
                  >
                    <div className="text-2xl">🎤</div>

                    <p className="mt-1 text-xs font-semibold tracking-[0.3em] text-gray-300">
                      ARTIST
                    </p>
                  </button>
                  <input type="hidden" {...register("role")} />
                </div>

                {/* Inputs */}

                <div className="mt-3 space-y-4">
                  <input
                    {...register("name", {
                      required: "Name is required",
                    })}
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-white/10 bg-[#0d1712] px-5 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-gray-500 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/20"
                  />

                  <input
                    {...register("email", {
                      required: "email is required",
                    })}
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-xl border border-white/10 bg-[#0d1712] px-5 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-gray-500 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/20"
                  />

                  <input
                    {...register("password", {
                      required: "password is required",
                    })}
                    type="password"
                    placeholder="Enter password"
                    className="w-full rounded-xl border border-white/10 bg-[#0d1712] px-5 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-gray-500 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/20"
                  />

                  <input
                    {...register("confirm", {
                      required: "confirm password is required",
                      validate: (value) => {
                        return value === password || "password do not match";
                      },
                    })}
                    type="password"
                    placeholder="confirm Password"
                    className="w-full rounded-xl border border-white/10 bg-[#0d1712] px-5 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-gray-500 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/20"
                  />
                </div>

                {/* Remember */}

                <div className="mt-3 flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm text-gray-400">
                    <input type="checkbox" className="accent-emerald-500" />
                    Accept Terms
                  </label>

                  <button
                    type="button"
                    className="text-sm text-emerald-300 hover:text-white"
                  >
                    Privacy
                  </button>
                </div>

                {/* Button */}

                <button
                  type="submit"
                  className="mt-7 text-white flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-emerald-400 via-green-500 to-lime-400 py-3 text-sm font-bold text-[#062012] shadow-[0_15px_35px_rgba(16,185,129,.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(16,185,129,.55)]"
                >
                  Create Account
                  <span className="text-lg">→</span>
                </button>

                <p className="mt-2 text-center text-sm text-gray-400">
                  Already have an account?
                  <span
                    onClick={() => navigate("/login")}
                    className="ml-2 cursor-pointer font-semibold text-emerald-300 hover:text-white"
                  >
                    Login
                  </span>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
