import React, { useState } from "react";

import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);

  return (
    <article className="border-b border-gray-200 pb-5">

      {/* Header */}
      <div className="flex items-center justify-between py-3">

        <div className="flex items-center gap-3">

          <div className="h-9 w-9 overflow-hidden rounded-full bg-gray-200">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="profile"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold">
              pushpendra
            </p>

            <p className="text-xs text-gray-500">
              Just now
            </p>
          </div>

        </div>

        <MoreHorizontal
          size={21}
          className="cursor-pointer"
        />

      </div>

      {/* Image */}
      <img
        src={URL.createObjectURL(post.image)}
        alt="post"
        className="w-full rounded-sm object-cover"
      />

      {/* Actions */}
      <div className="flex items-center justify-between py-3">

        <div className="flex items-center gap-4">

          {/* Like */}
          <button
            onClick={() => setLiked(!liked)}
            className="transition active:scale-90"
          >
            <Heart
              size={25}
              fill={liked ? "red" : "none"}
              className={liked ? "text-red-500" : "text-black"}
            />
          </button>

          {/* Comment */}
          <button>
            <MessageCircle size={25} />
          </button>

          {/* Share */}
          <button>
            <Send size={25} />
          </button>

        </div>

        {/* Bookmark */}
        <button>
          <Bookmark size={25} />
        </button>

      </div>

      {/* Likes */}
      <p className="text-sm font-semibold">
        {liked ? "1 like" : "0 likes"}
      </p>

      {/* Caption */}
      <p className="mt-1 text-sm">
        <span className="mr-2 font-semibold">
          pushpendra
        </span>

        {post.caption}
      </p>

      {/* Comments */}
      <p className="mt-2 cursor-pointer text-sm text-gray-500">
        View all comments
      </p>

      {/* Comment Input */}
      <input
        type="text"
        placeholder="Add a comment..."
        className="mt-3 w-full text-sm outline-none placeholder:text-gray-500"
      />

    </article>
  );
};

export default Post;