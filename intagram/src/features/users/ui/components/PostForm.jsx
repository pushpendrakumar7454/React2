import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Image, X } from "lucide-react";
import { userContext } from "../../../../app/context/context";
import { useSelector } from "react-redux";

const PostForm = () => {
  const { setUsers } = useContext(userContext);

  // Redux se logged-in user
  const { user } = useSelector((state) => state.auth);
  console.log("LOGGED IN USER:", user);

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
    });

    const preview = URL.createObjectURL(file);

    setImagePreview(preview);
  };

  const removeImage = () => {
    setImagePreview(null);

    setValue("image", null, {
      shouldValidate: true,
    });
  };

  const handleForm = (data) => {
    const reader = new FileReader();

    reader.onloadend = () => {

      const newPost = {
        // Post ID
        id: Date.now(),

        // ================= USER DATA =================

        userId: user?.id,
        userName: user?.name,
        userProfile: user?.profileImage,

        // ================= POST DATA =================

        image: reader.result,
        caption: data.caption,

        // ================= TIME =================

        createdAt: Date.now(),

        timeZone:
          Intl.DateTimeFormat().resolvedOptions().timeZone,
      };

      console.log("New Post:", newPost);

      setUsers((prev) => [
        ...prev,
        newPost,
      ]);

      reset();

      setImagePreview(null);
    };

    reader.readAsDataURL(data.image);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">

      <form
        onSubmit={handleSubmit(handleForm)}
        className="w-full max-w-[500px] overflow-hidden rounded-xl border border-gray-200 bg-white"
      >

        {/* ================= HEADER ================= */}

        <div className="border-b border-gray-200 px-5 py-4 text-center">

          <h2 className="text-lg font-semibold">
            Create new post
          </h2>

        </div>


        {/* ================= IMAGE ================= */}

        <div className="flex min-h-[300px] items-center justify-center bg-gray-50">

          {imagePreview ? (

            <div className="relative w-full">

              <img
                src={imagePreview}
                alt="preview"
                className="max-h-[450px] w-full object-contain"
              />

              {/* Remove Image */}

              <button
                type="button"
                onClick={removeImage}
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white"
              >
                <X size={18} />
              </button>

            </div>

          ) : (

            <div className="flex flex-col items-center px-5">

              {/* Image Icon */}

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


              {/* Gallery */}

              <label className="mt-5 cursor-pointer rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-600">

                Select from computer

                <input
                  {...register("image", {
                    required: "Please select an image",
                  })}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />

              </label>


              {/* Error */}

              {errors.image && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.image.message}
                </p>
              )}

            </div>

          )}

        </div>


        {/* ================= CAPTION ================= */}

        <div className="border-t border-gray-200 px-5 py-4">

          <textarea
            {...register("caption")}
            maxLength={2200}
            placeholder="Write a caption..."
            className="h-24 w-full resize-none outline-none placeholder:text-gray-500"
          />


          <div className="text-right text-xs text-gray-400">

            {caption?.length || 0} / 2,200

          </div>

        </div>


        {/* ================= SHARE ================= */}

        <div className="border-t border-gray-200 px-5 py-4">

          <button
            type="submit"
            disabled={!imagePreview}
            className="w-full rounded-lg bg-blue-500 py-2.5 text-sm font-semibold text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Share
          </button>

        </div>

      </form>

    </div>
  );
};

export default PostForm;