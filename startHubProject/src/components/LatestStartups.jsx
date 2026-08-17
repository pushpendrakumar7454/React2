import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import StartupCard from "./StartupCard";
import DeveloperStartupCart from "./DeveloperStartupCart";

const LatestStartups = () => {
  const startups = useSelector((state) => state.startup.startup);

  const latest = [...startups].reverse().slice(0, 4);

  return (
    <section className="mt-16">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-white">
          Latest Startups
        </h2>

        <Link
          to="/developer/DeveloperExplore"
          className="text-cyan-400 hover:text-cyan-300"
        >
          View All →
        </Link>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {latest.map((startup) => (
          <DeveloperStartupCart key={startup.id} startup={startup} />
        ))}
      </div>
    </section>
  );
};

export default LatestStartups;