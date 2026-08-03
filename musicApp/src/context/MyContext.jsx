import { createContext, useState } from "react";

export const MyContext=createContext()


export const MyContextProvider=({children})=>{
   
      const [users, setUsers] = useState( JSON.parse(localStorage.getItem("users")) || []);
      const [currentUser, setCurrentUser] = useState(()=>{
        return JSON.parse(localStorage.getItem("currentUser"))|| null
      })

    return <MyContext.Provider value={{users,setUsers,currentUser, setCurrentUser}}>{children}</MyContext.Provider>

}