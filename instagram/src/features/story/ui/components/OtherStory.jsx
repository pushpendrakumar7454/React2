import React from "react";

const OtherStory = () => {
  const stories = [
    {
      id: 1,
      username: "rahul",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 2,
      username: "priya",
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      id: 3,
      username: "rohit",
      image: "https://i.pravatar.cc/150?img=13",
    },
    {
      id: 4,
      username: "neha",
      image: "https://i.pravatar.cc/150?img=44",
    },
    {
      id: 5,
      username: "aman",
      image: "https://i.pravatar.cc/150?img=15",
    },
    {
      id: 6,
      username: "sakshi",
      image: "https://i.pravatar.cc/150?img=47",
    },
  ];

  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-4 px-2 py-3">

        {stories.map((story) => (
          <div
            key={story.id}
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
