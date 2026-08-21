import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Plus } from "lucide-react";
import { addStory } from "../../state/stoySlic";


const StoryBar = () => {
    const dispatch = useDispatch();

    const fileInputRef = useRef(null);

    const stories = useSelector(
        (state) => state.story.story
    );

    const handleStoryClick = () => {
        fileInputRef.current.click();
    };

    const handleStorySelect = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onloadend = () => {
            dispatch(
                addStory({
                    image: reader.result,
                    userName: "Neeraj",
                    profilePic:
                        "https://i.pravatar.cc/150?img=12"
                })
            );
        };

        reader.readAsDataURL(file);

        // Same image dobara select karne ke liye
        e.target.value = "";
    };

    return (
        <div className="flex gap-4 overflow-x-auto p-4">

            {/* YOUR STORY */}

            <button
                onClick={handleStoryClick}
                className="shrink-0 flex flex-col items-center"
            >
                <div className="w-20 h-20 rounded-full border-2 border-gray-300 p-1">

                    <div className="relative w-full h-full rounded-full bg-gray-200 flex items-center justify-center">

                        <Plus size={30} />

                    </div>

                </div>

                <span className="mt-1 text-sm">
                    Your Story
                </span>
            </button>

            {/* HIDDEN FILE INPUT */}

            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleStorySelect}
                className="hidden"
            />

            {/* OTHER STORIES */}

            {stories.map((story) => (
                <button
                    key={story.id}
                    className="shrink-0 flex flex-col items-center"
                >
                    <div className="w-20 h-20 rounded-full p-[3px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">

                        <img
                            src={story.profilePic}
                            alt={story.userName}
                            className="w-full h-full rounded-full object-cover border-2 border-white"
                        />

                    </div>

                    <span className="mt-1 text-sm">
                        {story.userName}
                    </span>
                </button>
            ))}

        </div>
    );
};

export default StoryBar;