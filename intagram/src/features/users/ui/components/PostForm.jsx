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

  // ================= IMAGE CHANGE =================

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setValue("image", file, {
      shouldValidate: true,
    });

    const preview = URL.createObjectURL(file);

    setImagePreview(preview);
  };

  // ================= REMOVE IMAGE =================

  const removeImage = () => {
    setImagePreview(null);

    setValue("image", null, {
      shouldValidate: true,
    });
  };

  // ================= FORM SUBMIT =================

  const handleForm = (data) => {
    if (!data.image) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      const newPost = {
        // ================= POST ID =================

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

      // Post add
      setUsers((prev) => [...prev, newPost]);

      // Form reset
      reset();

      // Image preview remove
      setImagePreview(null);
    };

    reader.readAsDataURL(data.image);
  };

  return (
    <div
      className="
        min-h-screen
        bg-gray-50
        px-3
        pt-6
        pb-24
        sm:px-4
        sm:py-10
      "
    >
      {/* ================= FORM CONTAINER ================= */}

      <div className="flex w-full justify-center">
        <form
          onSubmit={handleSubmit(handleForm)}
          className="
            w-full
            max-w-[500px]
            overflow-hidden
            rounded-xl
            border
            border-gray-200
            bg-white
            shadow-sm
          "
        >
          {/* ================= HEADER ================= */}

          <div className="border-b border-gray-200 px-4 py-4 text-center sm:px-5">
            <h2 className="text-lg font-semibold">
              Create new post
            </h2>
          </div>

          {/* ================= IMAGE SECTION ================= */}

          <div
            className="
              flex
              min-h-[260px]
              items-center
              justify-center
              bg-gray-50
              sm:min-h-[300px]
            "
          >
            {imagePreview ? (
              <div className="relative w-full">
                <img
                  src={imagePreview}
                  alt="preview"
                  className="
                    max-h-[350px]
                    w-full
                    object-contain
                    sm:max-h-[450px]
                  "
                />

                {/* ================= REMOVE IMAGE ================= */}

                <button
                  type="button"
                  onClick={removeImage}
                  className="
                    absolute
                    right-3
                    top-3
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-black/70
                    text-white
                  "
                >
                  <X size={18} />
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center px-4 py-8 text-center">
                {/* ================= IMAGE ICON ================= */}

                <div
                  className="
                    mb-4
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-gray-100
                    sm:h-20
                    sm:w-20
                  "
                >
                  <Image
                    size={34}
                    strokeWidth={1.5}
                  />
                </div>

                {/* ================= TITLE ================= */}

                <h3 className="text-lg font-normal sm:text-xl">
                  Drag photos and videos here
                </h3>

                {/* ================= SUBTITLE ================= */}

                <p className="mt-2 text-sm text-gray-500">
                  Or select from your device
                </p>

                {/* ================= SELECT IMAGE ================= */}

                <label
                  className="
                    mt-5
                    cursor-pointer
                    rounded-lg
                    bg-blue-500
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-blue-600
                  "
                >
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

                {/* ================= ERROR ================= */}

                {errors.image && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.image.message}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* ================= CAPTION ================= */}

          <div className="border-t border-gray-200 px-4 py-4 sm:px-5">
            <textarea
              {...register("caption")}
              maxLength={2200}
              placeholder="Write a caption..."
              className="
                h-24
                w-full
                resize-none
                text-sm
                outline-none
                placeholder:text-gray-500
                sm:text-base
              "
            />

            {/* Character Count */}

            <div className="text-right text-xs text-gray-400">
              {caption?.length || 0} / 2,200
            </div>
          </div>

          {/* ================= SHARE BUTTON ================= */}

          <div className="border-t border-gray-200 px-4 py-4 sm:px-5">
            <button
              type="submit"
              disabled={!imagePreview}
              className="
                w-full
                rounded-lg
                bg-blue-500
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-blue-600
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
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