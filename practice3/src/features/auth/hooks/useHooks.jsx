import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"


export const useAuth=()=>{
    
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {register,handleSubmit,formState:{errors},watch,reset}=useForm()


    const registerForm=(data)=>{
        console.log(data);
        
    }

    const loginForm=(data)=>{
        console.log(data);
        
    }

    return {
        register,handleSubmit,loginForm,registerForm,watch,navigate,dispatch
    }
}