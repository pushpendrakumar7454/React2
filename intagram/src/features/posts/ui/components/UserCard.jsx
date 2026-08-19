import React from "react";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  BadgeCheck,
} from "lucide-react";

const UserCard = ({post}) => {
  return (
    <article className="w-full max-w-[630px] mx-auto bg-white">

      {/* ================= HEADER ================= */}
      <div className="flex w-full items-center gap-2 px-3 py-3">

        {/* PROFILE IMAGE */}
        <img
          src={post?.image}
          alt="profile"
          className="h-10 w-10 shrink-0 rounded-full object-cover"
        />

        {/* USER INFO */}
        <div className="min-w-0 flex-1">

          <div className="flex items-center gap-1.5">

            <span className="truncate text-sm font-semibold text-gray-900">
              neeraj_kumar
            </span>

            <BadgeCheck
              size={14}
              fill="rgb(59 130 246)"
              className="shrink-0 text-blue-500"
            />

          </div>

          <p className="mt-0.5 text-xs text-gray-500">
            Just now
          </p>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="ml-auto flex shrink-0 items-center gap-3">

          {/* FOLLOW */}
          <button
            type="button"
            className="text-sm font-semibold text-blue-500 hover:text-blue-700"
          >
            Follow
          </button>

          {/* THREE DOTS */}
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
          >
            <MoreHorizontal
              size={22}
              strokeWidth={2}
              className="text-gray-900"
            />
          </button>

        </div>

      </div>

      {/* ================= IMAGE ================= */}
      <div className="w-full overflow-hidden">
        <img
          src={post.image}
          alt="post"
          className="block h-auto w-full object-cover"
        />
      </div>

      {/* ================= POST CONTENT ================= */}
      <div className="w-full px-3">

        {/* ACTIONS */}
        <div className="flex items-center justify-between pt-3">

          <div className="flex items-center gap-4">

            <button type="button">
              <Heart size={25} strokeWidth={1.8} />
            </button>

            <button type="button">
              <MessageCircle size={25} strokeWidth={1.8} />
            </button>

            <button type="button">
              <Send size={25} strokeWidth={1.8} />
            </button>

          </div>

          <button type="button">
            <Bookmark size={25} strokeWidth={1.8} />
          </button>

        </div>

        {/* LIKES */}
        <p className="mt-2 text-sm font-semibold text-gray-900">
          1,248 likes
        </p>

        {/* CAPTION */}
        <p className="mt-1 text-sm leading-5 text-gray-900">
          <span className="font-semibold">
            neeraj_kumar
          </span>{" "}
          Beautiful day and beautiful memories ❤️✨
        </p>

        {/* COMMENTS */}
        <button
          type="button"
          className="mt-1 text-sm text-gray-500"
        >
          View all 42 comments
        </button>

        {/* COMMENT INPUT */}
        <div className="mt-2 flex items-center gap-2 border-b border-gray-200 pb-3">

          <img
            src="https://i.pravatar.cc/100?img=11"
            alt="profile"
            className="h-7 w-7 shrink-0 rounded-full object-cover"
          />

          <input
            type="text"
            placeholder="Add a comment..."
            className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
          />

        </div>

        {/* TIME */}
        <p className="py-3 text-[10px] uppercase tracking-wide text-gray-400">
          JUST NOW
        </p>

      </div>

    </article>
  );
};

export default UserCard;