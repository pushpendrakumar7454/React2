import React from "react";

import Story from "../components/Story";
import Post from "../components/Post";

import FollowSuggestion from "../components/FollowSuggestion";



const Home = () => {
  return (
    <div className="flex justify-center gap-10 px-3 lg:px-6">

      <div className="w-full max-w-[630px]">

        <Story />

        <div className="mt-2 space-y-7">
 
        </div>

      </div>

      <div className="pt-8">
        <FollowSuggestion />
      </div>

    </div>
  );
};

export default Home;