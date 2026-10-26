

import { useForm } from "react-hook-form";

const KanbanForm = ({setToggle,setTask}) => {


   
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Task Created:", data);
    setTask((pre)=>[...pre,data])
    setToggle(true)
    reset();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-cyan-500 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl sm:p-8">

        {/* Heading */}
        <div className="mb-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-600">
            Task Manager
          </p>

          <h1 className="text-2xl font-bold text-gray-800">
            Create New Task
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Fill in the details to add a new task.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          {/* Task Title */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Task Title
            </label>

            <input
              type="text"
              placeholder="Enter task title"
              {...register("title", {
                required: "Task title is required",
              })}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
            />

            {errors.title && (
              <p className="mt-1 text-sm text-red-500">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Description
            </label>

            <textarea
              rows="4"
              placeholder="Describe your task..."
              {...register("description", {
                required: "Description is required",
              })}
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
            />

            {errors.description && (
              <p className="mt-1 text-sm text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Priority */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Priority
            </label>

            <select
              defaultValue=""
              {...register("priority", {
                required: "Please select priority",
              })}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
            >
              <option value="" disabled>
                Select priority
              </option>

              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>

            {errors.priority && (
              <p className="mt-1 text-sm text-red-500">
                {errors.priority.message}
              </p>
            )}
          </div>

          {/* Due Date */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Due Date
            </label>

            <input
              type="date"
              {...register("dueDate", {
                required: "Due date is required",
              })}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
            />

            {errors.dueDate && (
              <p className="mt-1 text-sm text-red-500">
                {errors.dueDate.message}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={() => reset()}
              className="w-1/2 rounded-lg border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-100"
            >
              Reset
            </button>

            <button
              type="submit"
              className="w-1/2 rounded-lg bg-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-cyan-600"
            >
              + Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default KanbanForm;
