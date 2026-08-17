import { createContext, useEffect, useState } from "react";

export const userContext = createContext();

const UserContextProvider = ({ children }) => {
    const [users, setUsers] = useState(()=>{
      return JSON.parse(localStorage.getItem('users'))||[]
    })

    useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <userContext.Provider value={{users,setUsers}}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;