import React, { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
 

  

     const{handleSubmit,register,watch,errors,registerSubmit}=useAuth()

  return (
    <div className="min-h-screen w-full bg-[#06030c] flex overflow-hidden">

      {/* =====================================================
          LEFT SIDE
      ====================================================== */}

      <div className="hidden lg:flex lg:w-1/2 relative min-h-screen overflow-hidden">

        {/* Main background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#111936] via-[#0b1229] to-[#050611]" />

        {/* Blue glow */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[130px]" />

        <div className="absolute bottom-[-250px] left-[-100px] w-[550px] h-[550px] rounded-full bg-indigo-600/10 blur-[130px]" />

        {/* Abstract futuristic lines */}

        <div className="absolute top-[12%] left-[-10%] w-[650px] h-[350px] border border-blue-300/10 rounded-[50%] rotate-[25deg]" />

        <div className="absolute top-[17%] left-[-15%] w-[700px] h-[370px] border border-blue-300/[0.07] rounded-[50%] rotate-[25deg]" />

        <div className="absolute top-[22%] left-[-20%] w-[750px] h-[390px] border border-blue-300/[0.05] rounded-[50%] rotate-[25deg]" />

        <div className="absolute top-[28%] left-[-25%] w-[800px] h-[420px] border border-blue-300/[0.04] rounded-[50%] rotate-[25deg]" />

        {/* Center futuristic shape */}

        <div className="absolute top-[18%] left-[42%] -translate-x-1/2">

          <div className="w-[160px] h-[350px] bg-gradient-to-b from-blue-400/10 via-indigo-400/5 to-transparent blur-[2px] rotate-[7deg] clip-path-polygon" />

        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050611] via-transparent to-[#090d1c]/30" />

        {/* Left content */}

        <div className="relative z-10 flex flex-col justify-between w-full p-10 xl:p-12">

          {/* Logo */}

          <div>
            <h1 className="text-white text-[27px] xl:text-[29px] font-bold tracking-tight">
              TeamSync
            </h1>
          </div>

          {/* Hero content */}

          <div className="max-w-[570px] pb-8">

            <div className="flex items-center gap-2 mb-5">

              <Sparkles
                size={15}
                className="text-blue-300"
              />

              <span className="text-[11px] tracking-[4px] font-semibold text-blue-200/80">
                NEXT-GEN COLLABORATION
              </span>

            </div>

            <h2 className="text-white text-[42px] xl:text-[50px] font-bold leading-[1.05] tracking-tight">
              Build better
              <br />
              <span className="text-blue-200">
                together.
              </span>
            </h2>

            <p className="mt-6 text-[15px] leading-7 text-gray-300/70 max-w-[500px]">
              Connect your team, manage your projects and
              collaborate seamlessly with TeamSync.
            </p>

            {/* Small feature row */}

            <div className="flex items-center gap-6 mt-8">

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-blue-500/10 border border-blue-300/10 flex items-center justify-center">
                  <Check
                    size={14}
                    className="text-blue-300"
                  />
                </div>

                <span className="text-[12px] text-gray-300/70">
                  Smart workspace
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-blue-500/10 border border-blue-300/10 flex items-center justify-center">
                  <Check
                    size={14}
                    className="text-blue-300"
                  />
                </div>

                <span className="text-[12px] text-gray-300/70">
                  Real-time teams
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          RIGHT SIDE
      ====================================================== */}

      <div className="w-full lg:w-1/2 min-h-screen bg-[#08050e] flex items-center justify-center px-5 py-10 sm:px-8 lg:px-12">

        <div className="w-full max-w-[500px]">

          {/* Mobile Logo */}

          <div className="lg:hidden mb-10">

            <h1 className="text-white text-[26px] font-bold">
              TeamSync
            </h1>

          </div>


          {/* Heading */}

          <div className="mb-9">

            <h2 className="text-white text-[34px] sm:text-[40px] font-bold tracking-tight leading-tight">
              Create your account
            </h2>

            <p className="text-gray-500 text-[13px] sm:text-[14px] mt-2">
              Experience the future of collaborative teamwork.
            </p>

          </div>


          {/* FORM */}

          <form onSubmit={handleSubmit(registerSubmit)}>

            {/* Full Name */}

            <div className="mb-6">

              <label className="block text-[12px] font-semibold text-gray-300 mb-2">
                Full Name
              </label>

              <div className="relative">

                <User
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                />

                <input
                {...register("name",{
                  required:"name is requried"
                })}
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full h-[53px] rounded-[7px] bg-[#111019] border border-white/[0.03] pl-12 pr-4 text-[13px] text-white placeholder:text-gray-600 outline-none focus:border-purple-600/60 focus:bg-[#14121c] transition"
                />

              </div>

            </div>


            {/* Email */}

            <div className="mb-6">

              <label className="block text-[12px] font-semibold text-gray-300 mb-2">
                Email Address
              </label>

              <div className="relative">

                <Mail
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                />

                <input
                {...register("email",{
                  required:"email is required"
                })}
                  type="email"
                  placeholder="name@company.com"
                  className="w-full h-[53px] rounded-[7px] bg-[#111019] border border-white/[0.03] pl-12 pr-4 text-[13px] text-white placeholder:text-gray-600 outline-none focus:border-purple-600/60 focus:bg-[#14121c] transition"
                />

              </div>

            </div>


            {/* Password */}

            <div className="mb-4">

              <label className="block text-[12px] font-semibold text-gray-300 mb-2">
                Password
              </label>

              <div className="relative">

                <Lock
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                />

                <input
                {...register("password",{
                  required:"password is required"
                })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  className="w-full h-[53px] rounded-[7px] bg-[#111019] border border-white/[0.03] pl-12 pr-12 text-[13px] text-white placeholder:text-gray-600 outline-none focus:border-purple-600/60 focus:bg-[#14121c] transition"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-300 transition"
                >
                  {showPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>

              </div>

            </div>


            {/* Password Strength */}

            <div className="mb-7">

              <div className="flex gap-1.5 mb-2">

                <div className="h-[3px] flex-1 rounded-full bg-purple-500" />

                <div className="h-[3px] flex-1 rounded-full bg-purple-500" />

                <div className="h-[3px] flex-1 rounded-full bg-[#24212b]" />

                <div className="h-[3px] flex-1 rounded-full bg-[#24212b]" />

              </div>

              <p className="text-[11px] text-purple-300">
                Strong password
              </p>

            </div>


            {/* Terms */}

            <div className="flex items-start gap-3 mb-7">

              

              <p className="text-[11px] leading-5 text-gray-500">
                I agree to the{" "}
                <span className="text-gray-300 hover:text-purple-400 cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-gray-300 hover:text-purple-400 cursor-pointer">
                  Privacy Policy
                </span>
                .
              </p>

            </div>


            {/* Create Account */}

            <button
              type="submit"
              className="w-full h-[53px] rounded-[7px] bg-gradient-to-r from-[#9b00ff] via-[#a600ff] to-[#8c00ff] hover:from-[#aa00ff] hover:via-[#b000ff] hover:to-[#9900ff] shadow-[0_10px_35px_rgba(155,0,255,0.25)] transition-all flex items-center justify-center gap-2 text-[13px] font-bold text-white"
            >
              Create Account

              <ArrowRight
                size={17}
                strokeWidth={2.5}
              />

            </button>

          </form>


          {/* Divider */}

          <div className="flex items-center gap-4 my-7">

            <div className="h-px flex-1 bg-white/[0.06]" />

            <span className="text-[10px] text-gray-600">
              OR CONTINUE WITH
            </span>

            <div className="h-px flex-1 bg-white/[0.06]" />

          </div>


          {/* Social Buttons */}

          <div className="grid grid-cols-2 gap-3">

            <button
              type="button"
              className="h-[48px] rounded-[7px] bg-[#111019] border border-white/[0.04] hover:bg-[#17151e] transition text-[12px] font-semibold text-gray-400"
            >
              Google
            </button>

            <button
              type="button"
              className="h-[48px] rounded-[7px] bg-[#111019] border border-white/[0.04] hover:bg-[#17151e] transition text-[12px] font-semibold text-gray-400"
            >
              GitHub
            </button>

          </div>


          {/* Login */}

          <p className="text-center text-[12px] text-gray-600 mt-7">

            Already have an account?{" "}

            <button
              type="button"
              className="text-gray-300 hover:text-purple-400 font-semibold transition"
            >
              Sign In
            </button>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;
