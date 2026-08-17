import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import StartupCard from "./StartupCard";
import DeveloperStartupCart from "./DeveloperStartupCart";

const RecommendedStartups = () => {
  const startups = useSelector((state) => state.startup.startup);

  const recommended = startups.slice(0, 4);

  return (
    <section className="mt-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-white">
          Recommended Startups
        </h2>

        <Link
          to="/developer/DeveloperExplore"
          className="text-cyan-400 hover:text-cyan-300"
        >
          View All →
        </Link>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {recommended.map((startup) => (
          <DeveloperStartupCart key={startup.id} startup={startup} />
        ))}
      </div>
    </section>
  );
};

export default RecommendedStartups;