import React from "react";
import {
  Grid3X3,
  Clapperboard,
  Bookmark,
  UserSquare2,
  VolumeX,
} from "lucide-react";
import { useSelector } from "react-redux";

const Posts = () => {
  const { posts } = useSelector((state) => state.post);

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex h-12 border-t border-gray-300">
        <div className="flex flex-1 items-center justify-center border-t border-black">
          <Grid3X3 size={22} />
        </div>

        <div className="flex flex-1 items-center justify-center text-gray-400">
          <Clapperboard size={22} />
        </div>

        <div className="flex flex-1 items-center justify-center text-gray-400">
          <Bookmark size={22} />
        </div>

        <div className="flex flex-1 items-center justify-center text-gray-400">
          <UserSquare2 size={22} />
        </div>
      </div>

      {/* Posts */}
      <div className="grid grid-cols-3 gap-1 pb-4">
        {posts.map((post) => {
          const isVideo =
            post?.mediaType === "video" ||
            post?.image?.startsWith("data:video/");

          return (
            <div
              key={post.id}
              className="relative aspect-square w-full overflow-hidden bg-gray-100"
            >
              {isVideo ? (
                <video
                  src={post.image}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
              ) : (
                <img
                  src={post.image}
                  alt="post"
                  className="h-full w-full object-cover"
                />
              )}

              {/* Volume Button */}
                {!isVideo && (
       <button
      type="button"
      className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white"
    >
      <VolumeX size={16} strokeWidth={2.5} />
    </button>
  )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;