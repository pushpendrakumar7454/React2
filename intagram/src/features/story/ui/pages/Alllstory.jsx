import React from "react";
import MyStory from "../components/MyStory";
import OtherStory from "../components/OtherStory";

const Alllstory = () => {
  return (
    <div className="flex items-center gap-4 px-4 py-2 w-full overflow-hidden">
      <div className="shrink-0">
        <MyStory />
      </div>

      <div className="min-w-0 flex-1 overflow-hidden">
        <OtherStory />
      </div>
    </div>
  );
};

export default Alllstory;
