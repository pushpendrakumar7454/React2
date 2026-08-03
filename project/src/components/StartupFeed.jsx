import React from "react";
import { useSelector } from "react-redux";
import StartupCard from "./StartupCard";
import { useAuth } from "../hooks/useAuth";

const StartupFeed = () => {
  const {startup} = useSelector((state) => state.startup);



  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <h2 className="text-3xl font-bold text-white mb-8">
        Explore Startups 🚀
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {startup.length > 0 ? (
          startup.map((startup) => (
            <StartupCard key={startup.id} startup={startup} />
          ))
        ) : (
          <p className="text-slate-400">No Startup Available</p>
        )}
      </div>
    </div>
  );
};

export default StartupFeed;
