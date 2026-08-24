import React from "react";
import {
  Grid3X3,
  Clapperboard,
  Bookmark,
  UserSquare2,
} from "lucide-react";

const Posts = () => {
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
      <div className="grid grid-cols-3 gap-1">
        <img
          src="https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600"
          className="aspect-square w-full object-cover"
          alt="post"
        />

        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600"
          className="aspect-square w-full object-cover"
          alt="post"
        />

        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600"
          className="aspect-square w-full object-cover"
          alt="post"
        />

        <img
          src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=600"
          className="aspect-square w-full object-cover"
          alt="post"
        />

        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600"
          className="aspect-square w-full object-cover"
          alt="post"
        />

        <img
          src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600"
          className="aspect-square w-full object-cover"
          alt="post"
        />

        <img
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600"
          className="aspect-square w-full object-cover"
          alt="post"
        />

        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600"
          className="aspect-square w-full object-cover"
          alt="post"
        />

        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600"
          className="aspect-square w-full object-cover"
          alt="post"
        />
      </div>
    </div>
  );
};

export default Posts;