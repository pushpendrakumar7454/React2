import React from "react";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";

const UserCard = () => {
  return (
    <article className="w-full overflow-hidden border-b border-gray-200 bg-white pb-5">

      {/* ================= HEADER ================= */}

      <div className="flex items-center justify-between px-3 py-3 sm:px-0">

        <div className="flex min-w-0 items-center gap-3">

          {/* PROFILE IMAGE */}

          <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-gray-200">
            <img src="https://i.pravatar.cc/150?img=12" alt="profile" className="h-full w-full object-cover" />
          </div>

          {/* NAME + TIME */}

          <div className="min-w-0">
            <p className="max-w-[180px] truncate text-sm font-semibold">
              username
            </p>

            <p className="text-xs text-gray-500">
              Just now
            </p>
          </div>

        </div>

        {/* FOLLOW + THREE DOTS */}

        <div className="flex shrink-0 items-center gap-3">

          <button type="button" className="text-sm font-semibold text-blue-500 transition hover:text-blue-700">
            Follow
          </button>

          <button type="button" className="p-1">
            <MoreHorizontal size={21} />
          </button>

        </div>

      </div>

      {/* ================= POST IMAGE ================= */}

      <div className="w-full overflow-hidden bg-gray-100">
        <img src="https://picsum.photos/600/600" alt="post" className="block aspect-square w-full object-cover sm:aspect-auto sm:max-h-[650px]" />
      </div>

      {/* ================= ACTIONS ================= */}

      <div className="flex items-center justify-between px-3 pt-3 sm:px-0">

        <div className="flex items-center gap-4">

          <button type="button" className="transition active:scale-90">
            <Heart size={25} />
          </button>

          <button type="button" className="transition active:scale-90">
            <MessageCircle size={25} />
          </button>

          <button type="button" className="transition active:scale-90">
            <Send size={25} />
          </button>

        </div>

        <button type="button" className="transition active:scale-90">
          <Bookmark size={25} />
        </button>

      </div>

      {/* ================= LIKES ================= */}

      <div className="px-3 pt-2 sm:px-0">
        <p className="text-sm font-semibold">
          0 likes
        </p>
      </div>

      {/* ================= CAPTION ================= */}

      <div className="px-3 pt-1 sm:px-0">
        <p className="break-words text-sm leading-5">
          <span className="mr-2 font-semibold">
            username
          </span>
          This is a sample caption
        </p>
      </div>

      {/* ================= COMMENTS ================= */}

      <div className="px-3 pt-2 sm:px-0">
        <button type="button" className="text-sm text-gray-500">
          View all comments
        </button>
      </div>

      {/* ================= COMMENT INPUT ================= */}

      <div className="px-3 pt-3 sm:px-0">
        <input type="text" placeholder="Add a comment..." className="w-full bg-transparent text-sm outline-none placeholder:text-gray-500" />
      </div>

    </article>
  );
};

export default UserCard;