import React from "react";
import { Plus, X } from "lucide-react";
import { useStory } from "../../hooks/useStory";

const MyStory = () => {
  const {
    register,
    handleFileChange,
    preview,
    fileType,
    showStory,
    setShowStory,
  } = useStory();

  return (
    <div className="mt-4 w-full">
      {/* Story Circle */}
      <div className="relative h-15 w-15 cursor-pointer rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[3px]">
        <div className="h-full w-full overflow-hidden rounded-full border-2 border-white bg-gray-100">
          {preview ? (
            fileType.startsWith("image/") ? (
              <img
                src={preview}
                alt="Story Preview"
                onClick={() => setShowStory(true)}
                className="h-full w-full cursor-pointer object-cover"
              />
            ) : (
              <video
                src={preview}
                onClick={() => setShowStory(true)}
                className="h-full w-full cursor-pointer object-cover"
              />
            )
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <Plus size={30} className="text-gray-600" />
            </div>
          )}
        </div>

        <input
          type="file"
          accept="image/*,video/*"
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          {...register("story", {
            onChange: handleFileChange,
          })}
        />

        <div className="pointer-events-none absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-blue-500 text-white">
          <Plus size={15} />
        </div>
      </div>

      <p className="mt-2 w-20 truncate text-center text-xs text-gray-700">
        Your Story
      </p>

      {/* Full Screen Story */}
      {showStory && preview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          onClick={() => setShowStory(false)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setShowStory(false)}
            className="absolute right-5 top-5 z-50 rounded-full bg-black/50 p-2 text-white"
          >
            <X size={30} />
          </button>

          {/* Large Image */}
          {fileType.startsWith("image/") ? (
            <img
              src={preview}
              alt="Story"
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          ) : (
            <video
              src={preview}
              autoPlay
              controls
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default MyStory;