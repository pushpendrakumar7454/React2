import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"



export const useAuth=()=>{
    


   const navigate= useNavigate()
    const {register,handleSubmit,formState:{errors} ,reset,watch} =useForm()
    const dispatch=useDispatch()

    const loginForm=(data)=>{
        console.log(data);
        
    }

    const registerForm=(data)=>{
        console.log(data);
        
    }
     

    return {
        register,handleSubmit,errors,watch,loginForm,registerForm,navigate,dispatch
    }
}