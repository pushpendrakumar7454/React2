import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  acceptApplication,
  rejectApplication,
} from "../features/developer/developerSlice";
import { FaCheck, FaTimes, FaUserTie } from "react-icons/fa";

const FounderApplications = () => {
  const dispatch = useDispatch();

  const applications = useSelector(
    (state) => state.developer.applications
  );

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <h1 className="text-3xl font-bold text-white mb-8">
        Startup Applications
      </h1>

      {applications.length === 0 ? (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-10 text-center">
          <h2 className="text-2xl text-white">
            No Applications Yet 😔
          </h2>

          <p className="text-slate-400 mt-2">
            Developers haven't applied to your startups yet.
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {applications.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    {item.title}
                  </h2>

                  <p className="text-slate-400">
                    Founder : {item.founder}
                  </p>
                </div>

                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold
                  ${
                    item.status === "Pending"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : item.status === "Accepted"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <div className="mt-5 space-y-2">
                <p className="text-white flex items-center gap-2">
                  <FaUserTie />
                  {item.developerName}
                </p>

                <p className="text-slate-400">
                  {item.developerEmail}
                </p>

                <p className="text-slate-300">
                  {item.coverLetter}
                </p>
              </div>

              {item.status === "Pending" && (
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() =>
                      dispatch(acceptApplication(item.id))
                    }
                    className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-white hover:bg-green-700"
                  >
                    <FaCheck />
                    Accept
                  </button>

                  <button
                    onClick={() =>
                      dispatch(rejectApplication(item.id))
                    }
                    className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-white hover:bg-red-700"
                  >
                    <FaTimes />
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FounderApplications;