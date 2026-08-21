import React from "react";
import { Plus } from "lucide-react";
import { useStory } from "../../hooks/useStory";

const MyStory = () => {
  const {handleSubmit,storySubmit,register}=useStory()

  return (
    <div className="mt-4 w-full">
      <form onSubmit={handleSubmit(storySubmit)}>
        <div className="relative h-15 w-15 cursor-pointer rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[3px]">
          <div className="h-full w-full overflow-hidden rounded-full border-2 border-white bg-gray-100">
            <div className="flex h-full w-full items-center justify-center">
              <Plus size={30} className="text-gray-600" />
            </div>
          </div>

          <input
            type="file"
            accept="image/*"
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
           {...register("story", {
    onChange: (e) => {
      const file = e.target.files?.[0];

      console.log("Selected file:", file);
    },
  })}
          />

          <div className="pointer-events-none absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-blue-500 text-white">
            <Plus size={15} />
          </div>
        </div>

        <p className="mt-2 w-20 truncate text-center text-xs text-gray-700">
          Your Story
        </p>
      </form>
    </div>
  );
};

export default MyStory;