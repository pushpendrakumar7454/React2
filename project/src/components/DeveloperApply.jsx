import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { applyStartup } from "../features/developer/developerSlice";

const DeveloperApply = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const startup = useSelector((state) =>
    state.startup.startup.find((item) => item.id == id)
  );

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
    },
  });

  const submitHandler = (data) => {
    dispatch(
      applyStartup({
        ...startup,

        applicant: {
          ...data,
        },

        appliedDate: new Date().toLocaleDateString(),
        status: "Pending",
      })
    );

    navigate("/developer/applications");
  };

  return (
    <section className="min-h-screen bg-slate-950 py-10">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h1 className="text-3xl font-bold text-white">
          Apply for Startup
        </h1>

        <p className="mt-2 text-slate-400">
          {startup?.title}
        </p>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="mt-8 space-y-5"
        >

          <input
            {...register("name")}
            placeholder="Full Name"
            className="w-full rounded-xl bg-slate-800 p-4 text-white outline-none"
          />

          <input
            {...register("email")}
            placeholder="Email"
            className="w-full rounded-xl bg-slate-800 p-4 text-white outline-none"
          />

          <input
            {...register("phone")}
            placeholder="Phone Number"
            className="w-full rounded-xl bg-slate-800 p-4 text-white outline-none"
          />

          <input
            {...register("skills")}
            placeholder="Skills (React, Node...)"
            className="w-full rounded-xl bg-slate-800 p-4 text-white outline-none"
          />

          <input
            {...register("experience")}
            placeholder="Experience"
            className="w-full rounded-xl bg-slate-800 p-4 text-white outline-none"
          />

          <input
            {...register("portfolio")}
            placeholder="GitHub / Portfolio Link"
            className="w-full rounded-xl bg-slate-800 p-4 text-white outline-none"
          />

          <textarea
            rows="5"
            {...register("coverLetter")}
            placeholder="Cover Letter"
            className="w-full rounded-xl bg-slate-800 p-4 text-white outline-none"
          />

          <button className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 py-4 font-semibold text-white">
            Submit Application
          </button>

        </form>
      </div>
    </section>
  );
};

export default DeveloperApply;