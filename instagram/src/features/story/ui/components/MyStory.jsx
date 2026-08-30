import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";

const MyStory = () => {
  const { register } = useForm();
  const [image, setImage] = useState(null);

  const submit = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div className="mt-4 w-full">
      <form>
        {/* Story Circle */}
        <div className="relative h-15 w-15 cursor-pointer rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[3px]">

          <div className="h-full w-full overflow-hidden rounded-full border-2 border-white bg-gray-100">

            {image ? (
              image.type.startsWith("image/") ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Story"
                  className="h-full w-full object-cover"
                />
              ) : (
                <video
                  src={URL.createObjectURL(image)}
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                />
              )
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <Plus size={30} className="text-gray-600" />
              </div>
            )}

          </div>

          {/* File Input */}
          <input
            {...register("file", {
              onChange: submit,
            })}
            type="file"
            accept="image/*,video/*"
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          />

          {/* Plus Icon */}
          {!image && (
            <div className="pointer-events-none absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-blue-500 text-white">
              <Plus size={15} />
            </div>
          )}
        </div>

        <p className="mt-2 w-20 truncate text-center text-xs text-gray-700">
          Your Story
        </p>
      </form>
    </div>
  );
};

export default MyStory;
