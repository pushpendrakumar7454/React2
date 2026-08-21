import React, { useEffect, useRef } from "react";
import { Plus } from "lucide-react";
import { useStory } from "../../hooks/useStory";
import { useSelector } from "react-redux";

const MyStory = () => {
  const fileInputRef = useRef(null);

  const {
    register,
    handleSubmit,
    onSubmit,
    preview,
    setPreview,
    setValue,
  } = useStory();

  const { story } = useSelector((state) => state.story);

  // Refresh ke baad saved story ka preview
  useEffect(() => {
    if (story?.length > 0) {
      const latestStory = story[story.length - 1];

      setPreview(latestStory.story);
    }
  }, [story, setPreview]);

  const openGallery = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    setValue("story", e.target.files);

    const imageUrl = URL.createObjectURL(file);

    setPreview(imageUrl);
  };

  const storyRegister = register("story", {
    onChange: handleImageChange,
  });

  return (
    <div className="mt-4 w-full">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div
          onClick={openGallery}
          className="relative h-15 w-15 cursor-pointer rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[3px]"
        >
          <div className="h-full w-full overflow-hidden rounded-full border-2 border-white bg-gray-100">

            {preview ? (
              <img
                src={preview}
                alt="story"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <Plus
                  size={30}
                  className="text-gray-600"
                />
              </div>
            )}

          </div>

          {!preview && (
            <div className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-blue-500 text-white">
              <Plus size={15} />
            </div>
          )}
        </div>

        <input
          type="file"
          accept="image/*"
          className="hidden"
          {...storyRegister}
          ref={(element) => {
            storyRegister.ref(element);
            fileInputRef.current = element;
          }}
        />

        <p className="mt-2 w-20 truncate text-center text-xs text-gray-700">
          Your Story
        </p>

      </form>
    </div>
  );
};

export default MyStory;