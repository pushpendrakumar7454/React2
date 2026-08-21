import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addStory } from "../state/stoySlic";

export const useStory = () => {
    const [preview, setPreview] = useState(null);

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
    } = useForm({
        defaultValues: {
            story: null,
        },
    });

    const onSubmit = (data) => {
        const file = data.story ?.[0];

        if (!file) {
            return;
        }

        const reader = new FileReader();

        reader.onload = () => {
            dispatch(
                addStory({
                    story: reader.result,
                })
            );

            reset();
            setPreview(null);
        };

        reader.readAsDataURL(file);
    };

    return {
        register,
        handleSubmit,
        errors,
        setValue,
        reset,
        onSubmit,
        preview,
        setPreview,
    };
};