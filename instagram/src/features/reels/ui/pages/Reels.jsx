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
} from "lucide-react";
import { useSelector } from "react-redux";

const Reels = () => {
  const { posts } = useSelector((state) => state.post);

  const videoRefs = useRef({});
  const audioRefs = useRef({});

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

    Object.values(audioRefs.current).forEach((audio) => {
      if (audio) {
        audio.muted = newMuted;
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
        {posts?.map((reel) => (
          <section
            key={reel.id}
            className="flex h-screen w-full snap-start items-center justify-center"
          >
            <div className="relative flex h-full w-full items-center justify-center">

              {/* =========================
                  VIDEO / IMAGE
              ========================= */}

              <div className="relative h-full w-full overflow-hidden bg-black sm:h-[95vh] sm:w-[430px] sm:rounded-lg">

                {/* VIDEO HO TO VIDEO */}

                {reel.video ? (
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
                ) : (
                  /* PHOTO HO TO IMAGE */

                  <img
                    src={reel.image}
                    alt={reel.name}
                    className="h-full w-full object-cover"
                  />
                )}

                {/* =========================
                    PLAY / PAUSE ICON
                ========================= */}

                {reel.video && !playing[reel.id] && (
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

                    {/* POST IMAGE */}

                    <img
                      src={reel.image}
                      alt={reel.name}
                      className="h-9 w-9 rounded-full object-cover"
                    />

                    {/* POST USER NAME */}

                    <span className="font-semibold">
                      {reel.name}
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

                  {/* CAPTION */}

                  <p className="max-w-[350px] text-sm leading-5">
                    {reel.caption}
                  </p>

                  {/* =========================
                      SONG
                      SAME LOGIC - NO CHANGE
                  ========================= */}

                  <div className="mt-2 flex items-center gap-2 text-xs text-gray-300">

                    <span>🎵</span>

                    <span>
                      {reel.songName ||
                        reel.musicName ||
                        reel.audioName ||
                        "Original audio"}
                    </span>

                    {(reel.audio ||
                      reel.song ||
                      reel.music) && (
                      <audio
                        ref={(element) => {
                          audioRefs.current[reel.id] =
                            element;
                        }}
                        src={
                          reel.audio ||
                          reel.song ||
                          reel.music
                        }
                        autoPlay
                        loop
                        muted={muted}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* =========================
                  RIGHT ACTIONS
              ========================= */}

              <div className="absolute bottom-6 right-3 z-30 flex flex-col items-center gap-5 text-black sm:right-auto sm:translate-x-[260px]">

                {/* LIKE */}

                <button
                  type="button"
                  onClick={() =>
                    handleLike(reel.id)
                  }
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
                  onClick={() =>
                    handleSave(reel.id)
                  }
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
                  src={reel.image}
                  alt={reel.name}
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