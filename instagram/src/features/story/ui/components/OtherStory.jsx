import React from "react";

const OtherStory = ({ stories, onStoryClick }) => {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-4 px-2 py-3">

        {stories.map((story) => (
          <div
            key={story.id}
            onClick={() => onStoryClick(story)}
            className="flex w-[72px] shrink-0 cursor-pointer flex-col items-center"
          >
            {/* Story Circle */}
            <div className="h-[68px] w-[68px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[3px]">
              <div className="h-full w-full rounded-full border-2 border-white bg-white p-[1px]">
                <img
                  src={story.image}
                  alt={story.username}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>

            {/* Username */}
            <p className="mt-1 w-full truncate text-center text-xs text-gray-700">
              {story.username}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default OtherStory;