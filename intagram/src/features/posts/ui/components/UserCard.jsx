import React from "react";
import { useSelector } from "react-redux";

const UserCard = ({ post }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <article className="w-full bg-white">

      {/* ================= POST HEADER ================= */}
      <div className="mx-auto flex h-[60px] w-full max-w-[470px] items-center justify-between px-3">

        {/* USER */}
        <div className="flex min-w-0 items-center gap-2.5">

          <img
            src={post.image}
            alt="Profile"
            className="h-9 w-9 shrink-0 rounded-full object-cover"
          />

          <div className="flex min-w-0 items-center gap-1.5">
            <span className="truncate text-[14px] font-semibold text-black">
              {user?.name || "User"}
            </span>

            <span className="text-[13px] text-gray-400">
              ·
            </span>

            <span className="text-[13px] text-gray-500">
              4h
            </span>
          </div>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          <button
            type="button"
            className="rounded-lg bg-[#f2f2f2] px-4 py-2 text-[14px] font-semibold text-black transition hover:bg-[#e7e7e7] active:scale-95"
          >
            Follow
          </button>

          <button
            type="button"
            aria-label="More options"
            className="flex h-9 w-7 items-center justify-center text-black"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-current"
            >
              <circle cx="5" cy="12" r="1.6" />
              <circle cx="12" cy="12" r="1.6" />
              <circle cx="19" cy="12" r="1.6" />
            </svg>
          </button>

        </div>

      </div>

      {/* ================= POST IMAGE ================= */}
      <div className="mx-auto w-full max-w-[470px] overflow-hidden">

        <img
          src={post.image}
          alt="Post"
          className="block aspect-square w-full object-cover"
        />

      </div>

      {/* ================= POST BOTTOM ================= */}
      <div className="mx-auto w-full max-w-[470px] px-3 py-3">

        {/* ACTIONS */}
        <div className="flex items-center gap-4">

          <button type="button" aria-label="Like">
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M20.8 8.7c0 5.5-8.8 10.3-8.8 10.3S3.2 14.2 3.2 8.7A4.7 4.7 0 0 1 12 6.4a4.7 4.7 0 0 1 8.8 2.3Z" />
            </svg>
          </button>

          <button type="button" aria-label="Comment">
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M21 11.5a8.4 8.4 0 0 1-9 8.3 9.4 9.4 0 0 1-3.5-.7L4 21l1.2-3.7a8 8 0 0 1-1.2-4.3A8.4 8.4 0 0 1 13 4.8a8.4 8.4 0 0 1 8 6.7Z" />
            </svg>
          </button>

          <button type="button" aria-label="Share">
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </button>

        </div>

        {/* CAPTION */}
        {post.caption && (
          <p className="mt-2 text-[14px] text-black">
            <span className="font-semibold">
              {user?.name || "User"}
            </span>{" "}
            {post.caption}
          </p>
        )}

      </div>

    </article>
  );
};

export default UserCard;