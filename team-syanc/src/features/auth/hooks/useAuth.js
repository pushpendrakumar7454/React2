import { useNavigate } from "react-router"
import { useForm } from 'react-hook-form'
import { useDispatch } from "react-redux"
import { loginEmployee } from "../state/auth/authAction"
import { useState } from "react"

export const useAuth = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [registerUSer, setRegisterUSer] = useState(() => {
        return JSON.parse(localStorage.getItem("registerUSer")) || []
    })

    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm()


    const registerSubmit = (data) => {
        const allredyUSer = registerUSer.find((u) => u.email === data.email)
        if (allredyUSer) {
            alert("Email allredy exsist")
            return
        }
        let arr = [...registerUSer, data]
        localStorage.setItem("registerUSer", JSON.stringify(arr))
        setRegisterUSer(arr)
        alert("user register succeesfully")
        navigate("/login")
        reset()
    }

    const loginSubmit = async(data) => {
        try {
            const result = await dispatch(loginEmployee(data)).unwrap();

            console.log("Login success:", result);

            navigate("/main");
        } catch (error) {
            console.log("Login failed:", error);
        }
    }
    return {
        navigate,
        registerSubmit,
        register,
        handleSubmit,
        watch,
        errors,
        loginSubmit
    }

}