import { useNavigate } from "react-router"
import { useForm } from 'react-hook-form'

export const useAuth = () => {

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm()


    const registerSubmit = (data) => {
        console.log(data)
    }

    const loginSubmit = (data) => {
        console.log(data)
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