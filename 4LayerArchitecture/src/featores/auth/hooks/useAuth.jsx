import { useNavigate } from "react-router"
import { useForm } from "react-hook-form"
import { useState } from "react"
import {useDispatch} from 'react-redux'
import { addUser } from "../state/authReducer"

export const useAuth = () => {

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
        let arr=[...registerUser,data]
        setRegisterUser(arr)
       localStorage.setItem('registerUser',JSON.stringify(arr))
       navigate("/login")
       alert("registration succefull")
    }

    const loginFrom=(data)=>{
       const user= registerUser.find((user)=>user.email===data.email && user.password===data.password)
       console.log(user)
       if(user){
        localStorage.setItem("currentUser",JSON.stringify(user))
        dispatch(addUser(user))
        alert("login succes")
        navigate('/')
       }else{
        alert("invalid cretencial")
       }
    }


    return {
        navigate,
        register,
        handleSubmit,
        watch,
        errors,
        registerSubmit,
        loginFrom
    }
}