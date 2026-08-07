import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginUserApi } from "../api/authApi";
import { addUser } from "../state/useAuth";

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const registerForm = (data) => {
    console.log(data);
  };

  const loginForm = async(data) => {
   try {
    let res= await loginUserApi(data)
    dispatch(addUser(res))
    alert("login succes")
    navigate("/main")
    
   } catch (error) {
    console.log(error);
    
   }
  };

  return {
    register,
    handleSubmit,
    loginForm,
    registerForm,
    watch,
    navigate,
    dispatch,
  };
};
