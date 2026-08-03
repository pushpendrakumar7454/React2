import { useNavigate } from "react-router"
import { useForm } from "react-hook-form"
import { useState } from "react"
import {useDispatch} from 'react-redux'
import { addUser } from "../state/authReducer"
import { loginUserApi } from "../api/authApi"

export const useHooks = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
   const [registerUser, setRegisterUser] = useState(() => {
    return JSON.parse(localStorage.getItem("registerUser")) || [];
});

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors }
    } = useForm()

    const registerSubmit = (data) => {
       console.log(data);
       
    }

    const loginForm=async(data)=>{
      console.log(data);
        
    }


    return {
        navigate,
        register,
        handleSubmit,
        watch,
        errors,
        registerSubmit,
        loginForm
    }
}