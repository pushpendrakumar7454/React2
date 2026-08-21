
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";


export const useStory = () => {
    

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
    } = useForm();

    const storySubmit = (data) => {
          const file = data.story?.[0];
    if (!file) return;
    console.log("Selected file:", file);
    };

    return {
        register,
        handleSubmit,
        errors,
        setValue,
        reset,
       storySubmit
    };
};