import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { MyContext } from "../context/MyContext";

const Login = () => {
    
   const {
      handleSubmit,
      reset,
      register,
      watch,
      setValue,
      formState: { errors },
    } = useForm();



    const {users,setCurrentUser}=useContext(MyContext)
  const navigate = useNavigate();
  const loginForm=(data)=>{
    const user=users.find((u)=>u.email==data.email && u.password==data.password)
    console.log(user);

     

    if(user){
      localStorage.setItem("currentUser",JSON.stringify(user))
      setCurrentUser(user)
      console.log(localStorage.getItem("currentUser"));

      alert("login succes")
      if(user.role=="artist"){
        navigate("/artist")

      }else if(user.role=='listener'){
        navigate("/")
      }
    }else{
      alert("invlid email and password")
    }

  }



  return (
    <div className="relative min-h-screen overflow-hidden bg-[#04110a]">
      {/* Background Glow */}
      <div className="absolute -left-32 top-0 h-[450px] w-[450px] rounded-full bg-emerald-500/20 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-green-400/10 blur-[130px]" />
      <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[120px]" />

      <div className="relative mx-auto flex min-h-screen max-w-[1700px]">
        {/* ================= LEFT HERO ================= */}

        <div className="relative hidden w-1/2 overflow-hidden lg:flex">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#03150d] via-[#07261a] to-[#031009]" />

          {/* Grid */}
          <div className="absolute inset-0 opacity-[0.05]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",
                backgroundSize: "45px 45px",
              }}
            />
          </div>

          {/* Glow Rings */}
          <div className="absolute -left-40 top-16 h-[420px] w-[420px] rounded-full border border-emerald-400/20 animate-pulse" />
          <div className="absolute -left-24 top-32 h-[340px] w-[340px] rounded-full border border-green-400/20 animate-pulse delay-300" />

          <div className="absolute left-20 bottom-16 h-[240px] w-[240px] rounded-full bg-emerald-500/10 blur-[90px]" />

          <div className="absolute right-20 top-24 h-40 w-40 rounded-full bg-green-400/20 blur-[70px] animate-bounce" />

          <div className="absolute bottom-24 right-28 h-28 w-28 rounded-full bg-lime-300/20 blur-[60px] animate-pulse" />

          {/* Hero Content */}

          <div className="relative mt-16 z-20 flex h-full w-full flex-col justify-center px-16">
            <span className="mb-2 w-fit rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-2 text-xs tracking-[0.4em] text-emerald-300">
              MUSIC EXPERIENCE
            </span>

            <h1 className="max-w-xl mt-3 text-4xl font-semibold leading-tight text-white">
              Welcome
             
              <span className="bg-gradient-to-r from-emerald-300 via-green-400 to-lime-300 bg-clip-text text-transparent pl-4">
                Back.
              </span>
            </h1>

            <p className="mt-2 max-w-md text-sm  text-gray-400">
              Continue your musical journey. Stream millions of tracks, discover
              new artists and enjoy your personalized playlists.
            </p>

            {/* Quick Stats */}

            <div className="mt-4 flex gap-5">
              <div className="rounded-3xl border border-white/10 bg-white/5 px-7 py-3 backdrop-blur-xl">
                <h2 className="text-2xl font-semibold text-emerald-300">25M+</h2>

                <p className="mt-1 text-xs tracking-widest text-gray-400">
                  TRACKS
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 px-7 py-3 backdrop-blur-xl">
                <h2 className="text-2xl font-semibold text-emerald-300">180K+</h2>

                <p className="mt-1 text-xs tracking-widest text-gray-400">
                  ARTISTS
                </p>
              </div>
            </div>

            {/* Animation Placeholder */}

            <div className="relative mt-16 h-[330px] w-full">
              {/* ================= VINYL PLAYER ================= */}

              <div className="absolute left-10 top-0">
                {/* Glow */}
                <div className="absolute left-8 top-8 h-[230px] w-[230px] rounded-full bg-emerald-500/20 blur-[90px] animate-pulse" />

                {/* Outer Ring */}
                <div className="relative flex h-[200px] w-[200px] animate-[spin_10s_linear_infinite] items-center justify-center rounded-full border-[10px] border-[#1d3427] bg-gradient-to-br from-[#0b1812] via-[#13261d] to-[#07100b] shadow-[0_0_80px_rgba(16,185,129,.35)]">
                  <div className="absolute h-[210px] w-[210px] rounded-full border border-emerald-500/20"></div>

                  <div className="absolute h-[165px] w-[165px] rounded-full border border-emerald-400/20"></div>

                  <div className="absolute h-[115px] w-[115px] rounded-full border border-emerald-300/20"></div>

                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-300 to-green-600 shadow-xl">
                    <div className="h-5 w-5 rounded-full bg-black"></div>
                  </div>
                </div>
              </div>

              {/* Tone Arm */}

              <div className="absolute left-[235px] top-16 rotate-[18deg]">
                <div className="relative h-[6px] w-[150px] rounded-full bg-gradient-to-r from-gray-400 to-gray-200">
                  <div className="absolute right-0 top-[-6px] h-5 w-5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-500/70"></div>
                </div>
              </div>

              {/* Floating Notes */}

              <div className="absolute right-16 top-6 animate-bounce text-5xl text-emerald-300">
                ♪
              </div>

              <div className="absolute right-2 top-28 animate-pulse text-3xl text-lime-300">
                ♫
              </div>

              <div className="absolute left-[320px] top-48 animate-bounce text-4xl text-green-400">
                ♬
              </div>

              <div className="absolute left-40 bottom-2 animate-pulse text-3xl text-emerald-200">
                ♩
              </div>

              {/* Music Card */}

              <div className="absolute right-0 top-12 w-56 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-2xl">
                <p className="text-xs tracking-[0.35em] text-emerald-300">
                  NOW PLAYING
                </p>

                <h3 className="mt-2 text-lg font-semibold text-white">
                  Lost In Rhythm
                </h3>

                <p className="mt-1 text-sm text-gray-400">Moon Studio</p>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-3/4 rounded-full bg-emerald-400"></div>
                </div>
              </div>

              {/* Playlist Card */}

              <div className="absolute bottom-0 right-16 w-48 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-xl">
                <p className="text-xs text-gray-400">Trending Playlist</p>

                <h4 className="mt-2 text-base font-semibold text-white">
                  Emerald Vibes
                </h4>

                <p className="mt-2 text-xs text-emerald-300">4.8M Listeners</p>
              </div>

              {/* Equalizer */}

              <div className="absolute bottom-4 right-0 flex h-36 items-end gap-2">
                <div className="h-12 w-2 animate-bounce rounded-full bg-emerald-400"></div>

                <div className="h-24 w-2 animate-bounce rounded-full bg-green-300 delay-75"></div>

                <div className="h-16 w-2 animate-bounce rounded-full bg-emerald-500 delay-150"></div>

                <div className="h-28 w-2 animate-bounce rounded-full bg-lime-300 delay-300"></div>

                <div className="h-20 w-2 animate-bounce rounded-full bg-green-400 delay-500"></div>

                <div className="h-32 w-2 animate-bounce rounded-full bg-emerald-300 delay-700"></div>

                <div className="h-16 w-2 animate-bounce rounded-full bg-green-500 delay-1000"></div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT LOGIN ================= */}
       <form onSubmit={handleSubmit(loginForm)} className="flex min-h-screen w-full items-center justify-center px-5 py-10 lg:w-1/2">
        <div >
          <div className="w-full lg:w-100 max-w-md">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-3xl shadow-[0_20px_80px_rgba(0,0,0,.5)]">
              {/* Logo */}

              <div className="text-center">
                <div className="mx-auto flex h-13  w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 text-white to-green-600 text-3xl shadow-[0_0_35px_rgba(16,185,129,.5)]">
                  ♪
                </div>

                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Welcome Back
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  Login to continue your music journey.
                </p>
              </div>

              {/* Form */}

              <div className="mt-8 space-y-4">
                {/* Email */}

                <div className="group">
                  <input
                  {...register("email",{
                    required:"Email is required"
                  })}
                    type="email"
                    placeholder="Email Address"
                    className="
          w-full
          rounded-xl
          border
          border-white/10
          bg-[#08130d]
          px-5
          py-3
          text-sm
          text-white
          outline-none
          transition
          duration-300
          placeholder:text-gray-500
          focus:border-emerald-400
          focus:ring-4
          focus:ring-emerald-500/20
          "
                  />
                </div>

                {/* Password */}

                <div>
                  <input
                  {...register("password",{
                    required:"password is required"
                  })}
                    type="password"
                    placeholder="Password"
                    className="
          w-full
          rounded-xl
          border
          border-white/10
          bg-[#08130d]
          px-5
          py-3
          text-sm
          text-white
          outline-none
          transition
          duration-300
          placeholder:text-gray-500
          focus:border-emerald-400
          focus:ring-4
          focus:ring-emerald-500/20
          "
                  />
                </div>
              </div>

              {/* Options */}

              <div className="mt-5 flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-400">
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-emerald-500"
                  />
                  Remember me
                </label>

                <button
                  className="
        text-sm
        text-emerald-300
        transition
        hover:text-white
        "
                >
                  Forgot Password?
                </button>
              </div>

              {/* Login Button */}

              <button
                type="submit"
                className="
      mt-7
      flex
      w-full
      items-center
      justify-center
      gap-3
      rounded-xl
      bg-gradient-to-r
      from-emerald-400
      via-green-500
      to-lime-400
      py-3
      text-sm
      font-bold
      text-[#041108]
      shadow-[0_15px_40px_rgba(16,185,129,.45)]
      transition
      duration-300
      hover:-translate-y-1
      hover:shadow-[0_25px_60px_rgba(16,185,129,.6)]
      "
              >
                Login
                <span className="text-lg">→</span>
              </button>

              {/* Divider */}

             
              {/* Social Buttons */}


              {/* Register Link */}

              <p className="mt-8 text-center text-sm text-gray-400">
                Don't have an account?
                <span
                  onClick={() => navigate("/register")}
                  className="
        ml-2
        cursor-pointer
        font-semibold
        text-emerald-300
        transition
        hover:text-white
        "
                >
                  Create Account
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

export default Login;
