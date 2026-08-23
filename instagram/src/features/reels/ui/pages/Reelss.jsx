import React from "react";
import {
  Heart,
  MessageCircle,
  Repeat2,
  Send,
  Bookmark,
  MoreHorizontal,
  VolumeX,
  Music2,
  ChevronUp,
  ChevronDown,
  Play,
} from "lucide-react";

const Reelss = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white overflow-hidden">

      {/* Main Reel Area */}
      <div className="relative flex items-end gap-5">

        {/* Video */}
        <div className="relative w-87 h-150 rounded-lg overflow-hidden bg-black">

          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-18 h-18 rounded-full bg-black/60 flex items-center justify-center">
              <Play
                size={32}
                fill="white"
                className="text-white ml-1"
              />
            </div>
          </div>

          {/* Mute Button */}
          <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-black/50 flex items-center justify-center">
            <VolumeX size={18} className="text-white" />
          </div>

          {/* User Info */}
          <div className="absolute bottom-4 left-4 text-white max-w-[270px]">

            <div className="flex items-center gap-2 mb-2">
              <div className="w-9 h-9 rounded-full bg-gray-300 overflow-hidden">
                <img
                  src="https://i.pravatar.cc/100?img=47"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>

              <span className="font-semibold text-sm">
                neha2866247
              </span>

              <span className="text-blue-400 text-sm">• Follow</span>
            </div>

            <p className="text-sm mb-2">
              Beautiful moments ✨
            </p>

            <div className="flex items-center gap-2 text-xs">
              <Music2 size={14} />
              <span>Hamar Chhot Ritesh Pandey</span>
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex flex-col items-center gap-5 pb-24">

          {/* Like */}
          <div className="flex flex-col items-center">
            <Heart size={28} strokeWidth={2} />
            <span className="text-xs mt-1">119</span>
          </div>

          {/* Comment */}
          <div className="flex flex-col items-center">
            <MessageCircle size={28} strokeWidth={2} />
            <span className="text-xs mt-1">16</span>
          </div>

          {/* Repost */}
          <div className="flex flex-col items-center">
            <Repeat2 size={28} strokeWidth={2} />
            <span className="text-xs mt-1">11</span>
          </div>

          {/* Share */}
          <Send size={28} strokeWidth={2} />

          {/* Save */}
          <Bookmark size={28} strokeWidth={2} />

          {/* More */}
          <MoreHorizontal size={28} strokeWidth={2} />

          {/* Music Thumbnail */}
          <div className="w-8 h-8 rounded-md overflow-hidden mt-2">
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right Side Navigation */}
      <div className="fixed right-7 top-1/2 -translate-y-1/2 flex flex-col gap-4">

        <button className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center">
          <ChevronUp size={28} />
        </button>

        <button className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center">
          <ChevronDown size={28} />
        </button>

      </div>

      {/* Messages Button */}
      <button className="fixed right-10 bottom-6 w-62 h-14 rounded-full bg-white shadow-md flex items-center justify-center gap-3 font-semibold">
        <Send size={23} />
        Messages
      </button>

    </div>
  );
};

export default Reelss;