import React, { useRef, useState } from "react";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  Volume2,
  VolumeX,
  Play,
  Pause,
} from "lucide-react";

const reels = [
  {
    id: 1,
    video:
      "https://www.instagram.com/reel/DcUENkzzG2E/?utm_source=ig_web_copy_link&igsi=NTc4MTIwNjQ2YQ==",
    username: "bmarsz",
    caption: "People really need to watch where they're going 😅",
    likes: 221,
    comments: 30,
    shares: 11,
    avatar: "https://i.pravatar.cc/100?img=12",
  },

  {
    id: 2,
    video:
      "https://cdn.pixabay.com/video/2023/10/21/185801-876852430_large.mp4",
    username: "travelworld",
    caption: "Beautiful day 🌴",
    likes: 540,
    comments: 42,
    shares: 18,
    avatar: "https://i.pravatar.cc/100?img=32",
  },

  {
    id: 3,
    video:
      "https://cdn.pixabay.com/video/2022/10/24/136058-764545544_large.mp4",
    username: "naturelife",
    caption: "Just enjoy the moment ❤️",
    likes: 892,
    comments: 76,
    shares: 24,
    avatar: "https://i.pravatar.cc/100?img=45",
  },
];

const Reels = () => {
  const videoRefs = useRef({});

  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState({});
  const [liked, setLiked] = useState({});
  const [saved, setSaved] = useState({});

  // --------------------------------
  // VIDEO PLAY / PAUSE
  // --------------------------------

  const handleVideoClick = (id) => {
    const video = videoRefs.current[id];

    if (!video) return;

    if (video.paused) {
      video
        .play()
        .then(() => {
          setPlaying((prev) => ({
            ...prev,
            [id]: true,
          }));
        })
        .catch((error) => {
          console.log("Video play error:", error);
        });
    } else {
      video.pause();

      setPlaying((prev) => ({
        ...prev,
        [id]: false,
      }));
    }
  };

  // --------------------------------
  // MUTE / UNMUTE
  // --------------------------------

  const handleMute = () => {
    const newMuted = !muted;

    setMuted(newMuted);

    Object.values(videoRefs.current).forEach((video) => {
      if (video) {
        video.muted = newMuted;
      }
    });
  };

  // --------------------------------
  // LIKE
  // --------------------------------

  const handleLike = (id) => {
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // --------------------------------
  // SAVE
  // --------------------------------

  const handleSave = (id) => {
    setSaved((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="fixed inset-0 overflow-hidden bg-white lg:pl-16">
      {/* REELS CONTAINER */}

      <div className="reels-scroll h-full w-full snap-y snap-mandatory overflow-y-auto">
        {reels.map((reel) => (
          <section
            key={reel.id}
            className="flex h-screen w-full snap-start items-center justify-center"
          >
            <div className="relative flex h-full w-full items-center justify-center">
              {/* =========================
                  VIDEO
              ========================= */}

              <div className="relative h-full w-full overflow-hidden bg-black sm:h-[95vh] sm:w-[430px] sm:rounded-lg">
                <video
                  ref={(element) => {
                    videoRefs.current[reel.id] = element;
                  }}
                  src={reel.video}
                  autoPlay
                  loop
                  muted={muted}
                  playsInline
                  preload="auto"
                  className="h-full w-full cursor-pointer object-cover"
                  onClick={() => handleVideoClick(reel.id)}
                  onPlay={() => {
                    setPlaying((prev) => ({
                      ...prev,
                      [reel.id]: true,
                    }));
                  }}
                  onPause={() => {
                    setPlaying((prev) => ({
                      ...prev,
                      [reel.id]: false,
                    }));
                  }}
                  onError={(e) => {
                    console.log(
                      "Video load error:",
                      e.currentTarget.error
                    );
                  }}
                />

                {/* =========================
                    PLAY / PAUSE ICON
                ========================= */}

                {!playing[reel.id] && (
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/50 text-white">
                      <Play
                        size={32}
                        fill="white"
                      />
                    </div>
                  </div>
                )}

                {/* =========================
                    MUTE BUTTON
                ========================= */}

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMute();
                  }}
                  className="absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white"
                >
                  {muted ? (
                    <VolumeX size={18} />
                  ) : (
                    <Volume2 size={18} />
                  )}
                </button>

                {/* =========================
                    GRADIENT
                ========================= */}

                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* =========================
                    USER + CAPTION
                ========================= */}

                <div className="absolute bottom-6 left-4 right-16 z-20 text-white">
                  <div className="mb-3 flex items-center gap-2">
                    <img
                      src={reel.avatar}
                      alt={reel.username}
                      className="h-9 w-9 rounded-full object-cover"
                    />

                    <span className="font-semibold">
                      {reel.username}
                    </span>

                    <span className="text-gray-300">
                      •
                    </span>

                    <button
                      type="button"
                      className="font-semibold text-blue-400"
                    >
                      Follow
                    </button>
                  </div>

                  <p className="max-w-[350px] text-sm leading-5">
                    {reel.caption}
                  </p>

                  <p className="mt-2 text-xs text-gray-300">
                    🎵 Original audio
                  </p>
                </div>
              </div>

              {/* =========================
                  RIGHT ACTIONS
              ========================= */}

              <div className="absolute bottom-6 right-3 z-30 flex flex-col items-center gap-5 text-black sm:right-auto sm:translate-x-[260px]">
                {/* LIKE */}

                <button
                  type="button"
                  onClick={() => handleLike(reel.id)}
                  className="flex flex-col items-center gap-1"
                >
                  <Heart
                    size={27}
                    strokeWidth={1.8}
                    fill={
                      liked[reel.id]
                        ? "red"
                        : "none"
                    }
                    className={
                      liked[reel.id]
                        ? "text-red-500"
                        : "text-black"
                    }
                  />

                  <span className="text-xs">
                    {liked[reel.id]
                      ? reel.likes + 1
                      : reel.likes}
                  </span>
                </button>

                {/* COMMENT */}

                <button
                  type="button"
                  className="flex flex-col items-center gap-1"
                >
                  <MessageCircle
                    size={27}
                    strokeWidth={1.8}
                  />

                  <span className="text-xs">
                    {reel.comments}
                  </span>
                </button>

                {/* SHARE */}

                <button
                  type="button"
                  className="flex flex-col items-center gap-1"
                >
                  <Send
                    size={27}
                    strokeWidth={1.8}
                  />

                  <span className="text-xs">
                    {reel.shares}
                  </span>
                </button>

                {/* SAVE */}

                <button
                  type="button"
                  onClick={() => handleSave(reel.id)}
                >
                  <Bookmark
                    size={27}
                    strokeWidth={1.8}
                    fill={
                      saved[reel.id]
                        ? "black"
                        : "none"
                    }
                  />
                </button>

                {/* MORE */}

                <button type="button">
                  <MoreHorizontal
                    size={27}
                    strokeWidth={1.8}
                  />
                </button>

                {/* AVATAR */}

                <img
                  src={reel.avatar}
                  alt=""
                  className="h-8 w-8 rounded-md border border-gray-300 object-cover"
                />
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Reels;