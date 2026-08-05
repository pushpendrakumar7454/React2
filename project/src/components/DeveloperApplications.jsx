import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withdrawApplication } from "../features/developer/developerSlice";
import { useNavigate } from "react-router";

import {
  FaSearch,
  FaRocket,
  FaUser,
  FaTrash,
  FaEye,
} from "react-icons/fa";

const DeveloperApplications = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const applications = useSelector(
    (state) => state.developer.applications
  );

  const [search, setSearch] = useState("");

  const filteredApplications = applications.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 p-6">

      {/* Heading */}

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">
          My Applications 📄
        </h1>

        <p className="text-slate-400 mt-2">
          Track all your startup applications.
        </p>
      </div>

      {/* Search */}

      <div className="flex flex-col md:flex-row gap-5 justify-between mb-8">

        <div className="relative flex-1">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"/>

          <input
            type="text"
            placeholder="Search application..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-12 pr-4 text-white outline-none focus:border-cyan-500"
          />

        </div>

        <div className="rounded-xl bg-cyan-500/20 px-6 py-3 text-cyan-400 font-semibold">
          Total : {applications.length}
        </div>

      </div>

      {/* Cards */}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {filteredApplications.map((startup)=>(
          <div
            key={startup.id}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6 hover:border-cyan-500 transition"
          >

            <div className="flex items-center gap-3">

              <div className="h-12 w-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                <FaRocket className="text-cyan-400"/>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">
                  {startup.title}
                </h2>

                <p className="text-slate-400">
                  {startup.category}
                </p>
              </div>

            </div>

            <p className="mt-5 text-slate-300">
              {startup.description}
            </p>

            <div className="mt-5 flex items-center gap-2">

              <FaUser className="text-cyan-400"/>

              <span className="text-white">
                {startup.founder}
              </span>

            </div>

            <div className="mt-5">
              <p className="text-sm text-slate-400">
                Applied On
              </p>

              <p className="text-white">
                {startup.appliedDate}
              </p>
            </div>

            <div className="mt-5">

              <span
                className={`rounded-full px-4 py-2 text-sm font-semibold
                  ${
                    startup.status==="Pending"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : startup.status==="Accepted"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-red-500/20 text-red-400"
                  }
                `}
              >
                {startup.status}
              </span>

            </div>

            <div className="mt-8 flex justify-between">

              <button
                onClick={()=>navigate(`/productdetail/${startup.id}`)}
                className="rounded-xl bg-cyan-500/20 px-4 py-3 text-cyan-400 hover:bg-cyan-500 hover:text-white transition"
              >
                <FaEye/>
              </button>

              <button
                onClick={()=>dispatch(withdrawApplication(startup.id))}
                className="rounded-xl bg-red-500/20 px-4 py-3 text-red-400 hover:bg-red-500 hover:text-white transition"
              >
                <FaTrash/>
              </button>

            </div>

          </div>
        ))}

      </div>

      {filteredApplications.length===0 &&(

        <div className="mt-24 text-center">

          <FaRocket className="mx-auto text-6xl text-slate-700"/>

          <h2 className="mt-5 text-3xl font-bold text-white">
            No Applications Yet
          </h2>

          <p className="mt-3 text-slate-400">
            Explore startups and apply to your first opportunity.
          </p>

        </div>

      )}

    </div>
  );
};

export default DeveloperApplications;