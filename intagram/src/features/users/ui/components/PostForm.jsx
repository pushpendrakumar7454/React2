import React from "react";
import { useForm } from "react-hook-form";

const PostForm = () => {

   const{register,handleSubmit,reset}= useForm()
  
   const handleForm=(data)=>{
    console.log('====================================');
    console.log(data);
    console.log('====================================');

   }

    return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">

      <form onSubmit={handleSubmit(handleForm)} className="w-full max-w-[500px] rounded-xl border border-gray-200 bg-white p-6">

        <h2 className="mb-6 text-center text-xl font-semibold">
          Create Post
        </h2>

        {/* Image */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium">
            Image
          </label>

          <input
          {...register("img",{
            required:"image is required"
          })}
            type="url"
            placeholder="enter imagee"
            className="w-full rounded-lg border border-gray-300 p-2 text-sm"
          />
        </div>

        {/* Name */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium">
            Name
          </label>

          <input
          {...register("name",{
            required:"name is required"
          })}
            type="text"
            placeholder="Enter name"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
          />
        </div>

        {/* Description */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium">
            Description
          </label>

          <textarea
          {...register("des",{
            required:"description is required"
          })}
            rows="5"
            placeholder="Write something..."
            className="w-full resize-none rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-500 py-2.5 text-sm font-semibold text-white hover:bg-blue-600"
        >
          Post
        </button>

      </form>

    </div>
  );
};

export default PostForm;