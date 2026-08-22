import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Image, X } from "lucide-react";
import { addStory } from "../../state/stoySlic";


const StoryCreate = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleImage = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        setImage(file);

        const imageUrl = URL.createObjectURL(file);

        setPreview(imageUrl);
    };


    const handleSubmit = () => {

        if (!image) {
            alert("Please select an image");
            return;
        }

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

            navigate("/");
        };

        reader.readAsDataURL(image);
    };


    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">

            <div className="w-full max-w-md bg-white rounded-xl overflow-hidden">

                {/* HEADER */}

                <div className="flex items-center justify-between p-4 border-b">

                    <h2 className="text-lg font-semibold">
                        Create Story
                    </h2>

                    <button
                        onClick={() => navigate(-1)}
                    >
                        <X />
                    </button>

                </div>


                {/* IMAGE PREVIEW */}

                <div className="h-[500px] bg-gray-100 flex items-center justify-center">

                    {preview ? (

                        <img
                            src={preview}
                            alt="preview"
                            className="w-full h-full object-cover"
                        />

                    ) : (

                        <label className="cursor-pointer flex flex-col items-center gap-3">

                            <Image size={50} />

                            <span>
                                Select Image
                            </span>

                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImage}
                                className="hidden"
                            />

                        </label>

                    )}

                </div>


                {/* BUTTON */}

                <div className="p-4">

                    <button
                        onClick={handleSubmit}
                        className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold"
                    >
                        Share to Story
                    </button>

                </div>

            </div>

        </div>
    );
};

export default StoryCreate;