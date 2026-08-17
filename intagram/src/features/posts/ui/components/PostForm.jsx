import React from "react";
import { useForm } from "react-hook-form";
import { Image } from "lucide-react";

const PostForm = () => {
  const { register, handleSubmit, formState: { errors },reset } = useForm({
    defaultValues: {
      image: null,
      caption: "",
    },
  });

  const submitPost = (data) => {
    console.log(data);
    reset()
  };

  return (
    <div className="min-h-screen bg-gray-50 px-3 pt-6 pb-24 sm:px-4 sm:py-10">
      <div className="flex w-full justify-center">
        <form onSubmit={handleSubmit(submitPost)} className="w-full max-w-[500px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

          <div className="border-b border-gray-200 px-4 py-4 text-center sm:px-5">
            <h2 className="text-lg font-semibold">Create new post</h2>
          </div>

          <div className="flex min-h-[260px] items-center justify-center bg-gray-50 sm:min-h-[300px]">
            <div className="flex flex-col items-center px-4 py-8 text-center">

              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 sm:h-20 sm:w-20">
                <Image size={34} strokeWidth={1.5} />
              </div>

              <h3 className="text-lg font-normal sm:text-xl">
                Drag photos and videos here
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Or select from your device
              </p>

              <label className="mt-5 cursor-pointer rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600">
                Select from computer

                <input
                  {...register("image", {
                    required: "Please select an image",
                  })}
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
              </label>

              {errors.image && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.image.message}
                </p>
              )}
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-4 sm:px-5">
            <textarea
              {...register("caption")}
              maxLength={2200}
              placeholder="Write a caption..."
              className="h-24 w-full resize-none text-sm outline-none placeholder:text-gray-500 sm:text-base"
            />
          </div>

          <div className="border-t border-gray-200 px-4 py-4 sm:px-5">
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-500 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Share
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default PostForm;