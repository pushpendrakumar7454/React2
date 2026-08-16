import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Image, X } from "lucide-react";

const PostForm = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      image: null,
      caption: "",
    },
  });

  const caption = watch("caption");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setValue("image", file, {
      shouldValidate: true,
      shouldDirty: true,
    });

    setImagePreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setImagePreview(null);
    setValue("image", null, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const onSubmit = (data) => {
    console.log("Post Data:", data);
    reset();
    setImagePreview(null);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[500px] overflow-hidden rounded-xl border border-gray-200 bg-white"
      >

        {/* Header */}
        <div className="border-b border-gray-200 px-5 py-4 text-center">
          <h2 className="text-lg font-semibold">
            Create new post
          </h2>
        </div>


        {/* Image Area */}
        <div className="flex min-h-[300px] items-center justify-center bg-gray-50">

          {imagePreview ? (

            <div className="relative w-full">

              <img
                src={imagePreview}
                alt="preview"
                className="max-h-[400px] w-full object-contain"
              />

              <button
                type="button"
                onClick={removeImage}
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white"
              >
                <X size={18} />
              </button>

            </div>

          ) : (

            <div className="flex flex-col items-center">

              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                <Image
                  size={40}
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="text-xl font-normal">
                Drag photos and videos here
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Or select from your device
              </p>

              <label className="mt-5 cursor-pointer rounded-lg bg-blue-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-600">

                Select from computer

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />

              </label>

              {errors.image && (
                <p className="mt-2 text-sm text-red-500">
                  Please select an image
                </p>
              )}

            </div>

          )}

        </div>


        {/* Caption */}
        <div className="border-t border-gray-200 px-5 py-4">

          <textarea
            {...register("caption", {
              required: "Caption is required",
              maxLength: {
                value: 2200,
                message: "Caption cannot exceed 2200 characters",
              },
            })}
            placeholder="Write a caption..."
            maxLength={2200}
            className="h-24 w-full resize-none outline-none placeholder:text-gray-500"
          />

          <div className="flex items-center justify-between text-xs text-gray-400">

            <span>😊</span>

            <span>
              {caption?.length || 0} / 2,200
            </span>

          </div>

          {errors.caption && (
            <p className="mt-1 text-xs text-red-500">
              {errors.caption.message}
            </p>
          )}

        </div>


        {/* Share Button */}
        <div className="border-t border-gray-200 px-5 py-4">

          <button
            type="submit"
            disabled={!imagePreview}
            className="w-full rounded-lg bg-blue-500 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Share
          </button>

        </div>

      </form>

    </div>
  );
};

export default PostForm;
