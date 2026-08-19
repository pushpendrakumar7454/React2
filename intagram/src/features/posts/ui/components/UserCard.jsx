import React from "react";
import { useSelector } from "react-redux";

const UserCard = ({post}) => {

  const {user}=useSelector((state)=>state.auth)
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="mx-auto w-full max-w-[470px]">

        <div className="flex h-[72px] items-center justify-between px-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <img src={post.image} alt="Profile" className="h-9 w-9 shrink-0 rounded-full object-cover" />

            <div className="flex items-center gap-1.5">
              <span className="text-[14px] font-semibold text-black capitalize">{user.name}</span>
              <span className="text-[13px] text-gray-400">·</span>
              <span className="text-[13px] text-gray-500">4h</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button type="button" className="rounded-lg bg-[#f2f2f2] px-4 py-2 text-[14px] font-semibold text-black transition hover:bg-[#e7e7e7] active:scale-95">
              Follow
            </button>

            <button type="button" aria-label="More options" className="flex h-9 w-7 items-center justify-center text-black">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <circle cx="5" cy="12" r="1.6" />
                <circle cx="12" cy="12" r="1.6" />
                <circle cx="19" cy="12" r="1.6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="w-full overflow-hidden rounded-[4px]">
          <img src={post.image}alt="Post" className="block aspect-[1/1] w-full object-cover object-center sm:aspect-[1/1] md:aspect-[1/1]" />
        </div>

      </div>
    </div>
  );
};

export default UserCard;