import React, { useRef, useState } from "react";
import { Plus } from "lucide-react";
import StoryViewer from "./StoryViewer";

const MyStory = () => {
  const [stories, setStories] = useState([]);
  const [showStory, setShowStory] = useState(false);

  const fileInputRef = useRef(null);

  // File select hone par
  const submit = (e) => {
    const file = e.target.files[0];
    if (file) {
      setStories((prev) => [...prev, file]);
    }
    // Same file dobara select karne ke liye
    e.target.value = "";
  };

  // Story circle par click
  const handleStoryClick = () => {
    if (stories.length > 0) {
      // Story already hai → Viewer open
      setShowStory(true);
    } else {
      // Story nahi hai → File picker open
      fileInputRef.current.click();
    }
  };

  // Viewer ke + button se new story
  const handleAddStory = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="mt-4 w-full">

      {/* Story Circle */}
      <div
        onClick={handleStoryClick}
        className="relative h-15 w-15 cursor-pointer rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[3px]"
      >
        <div className="h-full w-full overflow-hidden rounded-full border-2 border-white bg-gray-100">

          {stories.length > 0 ? (
            stories[0].type.startsWith("image/") ? (
              <img
                src={URL.createObjectURL(stories[0])}
                alt="Story"
                className="h-full w-full object-cover"
              />
            ) : (
              <video
                src={URL.createObjectURL(stories[0])}
                className="h-full w-full object-cover"
                muted
              />
            )
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <Plus size={30} className="text-gray-600" />
            </div>
          )}

        </div>

        {/* Plus Icon */}
        <div className="pointer-events-none absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-blue-500 text-white">
          <Plus size={15} />
        </div>
      </div>

      {/* Name */}
      <p className="mt-2 w-20 truncate text-center text-xs text-gray-700">
        Your Story
      </p>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*,video/*"
        onChange={submit}
        className="hidden"
      />

      {/* Story Viewer */}
      {showStory && (
        <StoryViewer
          stories={stories}
          onClose={() => setShowStory(false)}
          onAddStory={handleAddStory}
        />
      )}
    </div>
  );
};

export default MyStory;