import React, { useEffect, useState } from "react";
import { X, Plus } from "lucide-react";

const StoryViewer = ({ stories, onClose, onAddStory }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Story progress
  useEffect(() => {
    if (!stories || stories.length === 0) return;

    setProgress(0);

    const duration = 5000; // 5 seconds
    const intervalTime = 50;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const nextProgress =
          prev + (100 * intervalTime) / duration;

        if (nextProgress >= 100) {
          clearInterval(interval);

          // Next story
          if (currentIndex < stories.length - 1) {
            setCurrentIndex((prev) => prev + 1);
          } else {
            // Last story ke baad close
            onClose();
          }

          return 100;
        }

        return nextProgress;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [currentIndex, stories, onClose]);

  if (!stories || stories.length === 0) {
    return null;
  }

  const story = stories[currentIndex];

  // Next button
  const nextStory = () => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      onClose();
    }
  };

  // Previous button
  const previousStory = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">

      {/* =========================
          PROGRESS BARS
      ========================== */}
      <div className="absolute left-3 right-3 top-3 z-50 flex gap-1">
        {stories.map((_, index) => (
          <div
            key={index}
            className="h-1 flex-1 overflow-hidden rounded-full bg-gray-600"
          >
            <div
              className="h-full rounded-full bg-white"
              style={{
                width:
                  index < currentIndex
                    ? "100%"
                    : index === currentIndex
                    ? `${progress}%`
                    : "0%",
              }}
            />
          </div>
        ))}
      </div>

      {/* =========================
          CLOSE BUTTON
      ========================== */}
      <button
        onClick={onClose}
        className="absolute right-5 top-8 z-50 text-white"
      >
        <X size={30} />
      </button>

      {/* =========================
          STORY IMAGE / VIDEO
      ========================== */}
      <div className="h-full w-full max-w-md">
        {story.type.startsWith("image/") ? (
          <img
            key={currentIndex}
            src={URL.createObjectURL(story)}
            alt="Story"
            className="h-full w-full object-contain"
          />
        ) : (
          <video
            key={currentIndex}
            src={URL.createObjectURL(story)}
            className="h-full w-full object-contain"
            autoPlay
            muted
            controls
          />
        )}
      </div>

      {/* =========================
          PREVIOUS BUTTON
      ========================== */}
      {currentIndex > 0 && (
        <button
          onClick={previousStory}
          className="absolute left-5 z-50 text-4xl text-white"
        >
          ❮
        </button>
      )}

      {/* =========================
          NEXT BUTTON
      ========================== */}
      {currentIndex < stories.length - 1 && (
        <button
          onClick={nextStory}
          className="absolute right-5 z-50 text-4xl text-white"
        >
          ❯
        </button>
      )}

      {/* =========================
          ADD STORY BUTTON
      ========================== */}
      <button
        onClick={onAddStory}
        className="absolute bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white"
      >
        <Plus size={28} />
      </button>

    </div>
  );
};

export default StoryViewer;