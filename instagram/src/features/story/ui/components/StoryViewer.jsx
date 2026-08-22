import React from "react";
import { useParams, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { X } from "lucide-react";

const StoryViewer = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const stories = useSelector(
        (state) => state.story.story
    );

    const story = stories.find(
        (story) => story.id === Number(id)
    );

    if (!story) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">

            <div className="relative h-full w-full max-w-md">

                {/* CLOSE */}

                <button
                    onClick={() => navigate(-1)}
                    className="absolute right-4 top-4 z-10 text-white"
                >
                    <X size={30} />
                </button>


                {/* USER */}

                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">

                    <img
                        src={story.profilePic}
                        className="w-10 h-10 rounded-full"
                    />

                    <span className="text-white font-semibold">
                        {story.userName}
                    </span>

                </div>


                {/* STORY IMAGE */}

                <img
                    src={story.image}
                    alt="story"
                    className="w-full h-full object-cover"
                />

            </div>

        </div>
    );
};

export default StoryViewer;