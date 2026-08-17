import React, { useEffect, useState } from "react";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";

const UserCard = ({ users }) => {
  const [liked, setLiked] = useState(false);
  const [timeAgo, setTimeAgo] = useState("Just now");

  // ================= TIME =================

  const getTimeAgo = () => {
    if (!users?.createdAt) {
      return "Just now";
    }

    const difference = Date.now() - users.createdAt;

    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
      return "Just now";
    }

    if (minutes < 60) {
      return `${minutes}m`;
    }

    if (hours < 24) {
      return `${hours}h`;
    }

    if (days < 7) {
      return `${days}d`;
    }

    return new Date(users.createdAt).toLocaleDateString();
  };


  // ================= REAL TIME =================

  useEffect(() => {
    setTimeAgo(getTimeAgo());

    const interval = setInterval(() => {
      setTimeAgo(getTimeAgo());
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, [users?.createdAt]);


  return (
    <article className="w-full overflow-hidden border-b border-gray-200 bg-white pb-5">

      {/* ================= HEADER ================= */}

      <div className="flex items-center justify-between px-3 py-3 sm:px-0">

        {/* Profile + Name + Time */}

        <div className="flex min-w-0 items-center gap-3">

          {/* Profile Image */}

          <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-gray-200">

            <img
              src={
                users?.userProfile ||
                "https://i.pravatar.cc/150?img=12"
              }
              alt={users?.userName || "profile"}
              className="h-full w-full object-cover"
            />

          </div>


          {/* Name + Time */}

          <div className="min-w-0">

            <p className="max-w-[180px] truncate text-sm font-semibold">

              {users?.userName || "username"}

            </p>


            <p className="text-xs text-gray-500">

              {timeAgo}

            </p>

          </div>

        </div>


        {/* Follow + Three dots */}

        <div className="flex shrink-0 items-center gap-3">

          <button
            type="button"
            className="text-sm font-semibold text-blue-500 transition hover:text-blue-700"
          >
            Follow
          </button>


          <button
            type="button"
            className="p-1"
          >
            <MoreHorizontal size={21} />
          </button>

        </div>

      </div>


      {/* ================= POST IMAGE ================= */}

      <div className="w-full overflow-hidden bg-gray-100">

        <img
          src={users?.image}
          alt="post"
          className="block aspect-square w-full object-cover sm:aspect-auto sm:max-h-[650px]"
        />

      </div>


      {/* ================= ACTIONS ================= */}

      <div className="flex items-center justify-between px-3 pt-3 sm:px-0">

        <div className="flex items-center gap-4">

          {/* LIKE */}

          <button
            type="button"
            onClick={() => setLiked(!liked)}
            className="transition active:scale-90"
          >

            <Heart
              size={25}
              fill={liked ? "red" : "none"}
              className={
                liked
                  ? "text-red-500"
                  : "text-black"
              }
            />

          </button>


          {/* COMMENT */}

          <button
            type="button"
            className="transition active:scale-90"
          >

            <MessageCircle size={25} />

          </button>


          {/* SHARE */}

          <button
            type="button"
            className="transition active:scale-90"
          >

            <Send size={25} />

          </button>

        </div>


        {/* BOOKMARK */}

        <button
          type="button"
          className="transition active:scale-90"
        >

          <Bookmark size={25} />

        </button>

      </div>


      {/* ================= LIKES ================= */}

      <div className="px-3 pt-2 sm:px-0">

        <p className="text-sm font-semibold">

          {liked ? "1 like" : "0 likes"}

        </p>

      </div>


      {/* ================= CAPTION ================= */}

      <div className="px-3 pt-1 sm:px-0">

        <p className="break-words text-sm leading-5">

          <span className="mr-2 font-semibold">

            {users?.userName || "username"}

          </span>

          {users?.caption}

        </p>

      </div>


      {/* ================= COMMENTS ================= */}

      <div className="px-3 pt-2 sm:px-0">

        <button
          type="button"
          className="text-sm text-gray-500"
        >

          View all comments

        </button>

      </div>


      {/* ================= COMMENT INPUT ================= */}

      <div className="px-3 pt-3 sm:px-0">

        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-500"
        />

      </div>

    </article>
  );
};

export default UserCard;