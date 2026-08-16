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

      {/* ================= HEADER ================= */}

      <div className="flex items-center justify-between py-3">

        <div className="flex items-center gap-3">

          <img
            src={post.profile}
            alt={post.username}
            className="h-9 w-9 rounded-full object-cover"
          />

          <div>

            <p className="text-sm font-semibold">
              {post.username}
            </p>

            <p className="text-xs text-gray-500">
              {post.time}
            </p>

          </div>

        </div>

        <MoreHorizontal
          size={21}
          className="cursor-pointer"
        />

      </div>


      {/* ================= IMAGE ================= */}

      <img
        src={post.image}
        alt="post"
        className="w-full rounded-sm object-cover"
      />


      {/* ================= ACTIONS ================= */}

      <div className="flex items-center justify-between py-3">

        <div className="flex items-center gap-4">

          {/* LIKE */}

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


          {/* COMMENT */}

          <button>
            <MessageCircle
              size={25}
            />
          </button>


          {/* SHARE */}

          <button>
            <Send
              size={25}
            />
          </button>

        </div>


        {/* BOOKMARK */}

        <button>
          <Bookmark
            size={25}
          />
        </button>

      </div>


      {/* ================= LIKES ================= */}

      <p className="text-sm font-semibold">
        {liked
          ? `${Number(post.likes.replace(",", "")) + 1} likes`
          : `${post.likes} likes`}
      </p>


      {/* ================= CAPTION ================= */}

      <p className="mt-1 text-sm">

        <span className="mr-2 font-semibold">
          {post.username}
        </span>

        {post.caption}

      </p>


      {/* ================= COMMENTS ================= */}

      <p className="mt-2 cursor-pointer text-sm text-gray-500">
        View all comments
      </p>


      {/* ================= COMMENT INPUT ================= */}

      <input
        type="text"
        placeholder="Add a comment..."
        className="mt-3 w-full text-sm outline-none placeholder:text-gray-500"
      />

    </article>
  );
};

export default Post;