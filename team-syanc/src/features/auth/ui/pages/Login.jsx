
import React, { useState } from "react";
import { Cloud, ArrowRight, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {loginSubmit,register,errors,handleSubmit}=useAuth()


  return (
    <div className="min-h-screen w-full bg-[#07030d] flex items-center justify-center px-4 py-8 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-180px] left-[-180px] w-[450px] h-[450px] bg-purple-700/10 rounded-full blur-[130px]" />

      <div className="absolute bottom-[-200px] right-[-150px] w-[450px] h-[450px] bg-fuchsia-700/10 rounded-full blur-[130px]" />

      {/* Main Login Card */}
      <div className="relative z-10 w-full max-w-[360px] rounded-[18px] bg-[#141019] border border-white/[0.03] shadow-[0_30px_100px_rgba(0,0,0,0.65)] px-7 py-7 sm:px-8 sm:py-8">

        {/* Logo */}
        <div className="flex justify-center mb-3">
          <div className="w-[54px] h-[54px] rounded-[12px] bg-gradient-to-br from-[#b900ff] to-[#7000ff] flex items-center justify-center shadow-[0_0_30px_rgba(157,0,255,0.45)]">
            <Cloud
              size={29}
              strokeWidth={2.5}
              className="text-white"
            />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-7">
          <h1 className="text-[27px] sm:text-[29px] font-bold text-white tracking-tight">
            TeamSync
          </h1>

          <p className="text-[13px] text-gray-400 mt-1">
            Sign in to your workspace
          </p>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-3 mb-7">

          <button
            type="button"
            className="h-[44px] rounded-[7px] bg-[#1b1721] hover:bg-[#24202b] border border-white/[0.02] transition flex items-center justify-center gap-2 text-[12px] font-semibold text-gray-300"
          >
            <Cloud size={17} />
            GOOGLE
          </button>

          <button
            type="button"
            className="h-[44px] rounded-[7px] bg-[#1b1721] hover:bg-[#24202b] border border-white/[0.02] transition flex items-center justify-center gap-2 text-[12px] font-semibold text-gray-300"
          >
            {/* <Github size={17} /> */}
            GITHUB
          </button>

        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-7">

          <div className="h-px flex-1 bg-white/[0.05]" />

          <span className="text-[11px] text-gray-500 whitespace-nowrap">
            or continue with email
          </span>

          <div className="h-px flex-1 bg-white/[0.05]" />

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(loginSubmit)}>

          {/* Email */}
          <div className="mb-5">

            <label className="block text-[11px] font-bold text-gray-300 tracking-wide mb-2">
              EMAIL ADDRESS
            </label>

            <input
            {...register("email",{
              required:"this is required"
            })}
              type="email"
              placeholder="Enter your email"
              className="w-full h-[45px] rounded-[7px] bg-[#f1f2ff] px-4 text-[13px] text-gray-900 outline-none border-2 border-transparent focus:border-purple-500 transition placeholder:text-gray-400"
            />

          </div>

          {/* Password */}
          <div className="mb-4">

            <div className="flex items-center justify-between mb-2">

              <label className="text-[11px] font-bold text-gray-300 tracking-wide">
                PASSWORD
              </label>

              <button
                type="button"
                className="text-[11px] text-gray-400 hover:text-purple-400 transition"
              >
                Forgot password?
              </button>

            </div>

            <div className="relative">

              <input
              {...register("password",{
                required:"this is required"
              })}
               type="password"
                placeholder="Enter your password"
                className="w-full h-[45px] rounded-[7px] bg-[#08050d] px-4 pr-11 text-[13px] text-white outline-none border border-transparent focus:border-purple-600 transition placeholder:text-gray-600"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition"
              >
                {showPassword ? (
                  <EyeOff size={16} />
                ) : (
                  <Eye size={16} />
                )}
              </button>

            </div>

          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2 mb-5">

            <input
              type="checkbox"
            
              className="w-[13px] h-[13px] accent-purple-600 cursor-pointer"
            />

            <span className="text-[11px] text-gray-400">
              Stay signed in
            </span>

          </div>

          {/* Sign In */}
          <button
            type="submit"
            className="w-full h-[45px] rounded-[7px] bg-gradient-to-r from-[#a000ff] to-[#9400ff] hover:from-[#b000ff] hover:to-[#a000ff] active:scale-[0.99] transition-all shadow-[0_8px_25px_rgba(151,0,255,0.25)] flex items-center justify-center gap-2 text-[13px] font-bold text-white"
          >
            Sign In
            <ArrowRight size={17} strokeWidth={2.5} />
          </button>

        </form>

        {/* Sign Up */}
        <div className="text-center mt-7">

          <p className="text-[11px] text-gray-500">
            Don't have an account?{" "}
            <button
              type="button"
              className="text-gray-300 hover:text-purple-400 font-semibold transition"
            >
              Sign Up
            </button>
          </p>

        </div>

      </div>
    </div>
  );
};

export default Login;

