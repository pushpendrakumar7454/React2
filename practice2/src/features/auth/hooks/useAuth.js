import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginUserapi } from "../api/authApi";
import { addUser } from "../state/authReducer";

export const useAuth = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const dispatch = useDispatch();

  const loginForm = async (data) => {
    try {
      let res = await loginUserapi(data);
      dispatch(addUser(res));
    } catch (error) {
      console.log(error);
    }
  };

  const registerForm = (data) => {
    console.log(data);
  };

  return {
    register,
    handleSubmit,
    errors,
    watch,
    loginForm,
    registerForm,
    navigate,
    dispatch,
  };
};
