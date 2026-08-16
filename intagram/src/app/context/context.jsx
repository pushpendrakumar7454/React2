import { createContext, useState } from "react";

export const userContext = createContext();

const UserContextProvider = ({ children }) => {
    const [users, setUsers] = useState([])
  return (
    <userContext.Provider value={{users,setUsers}}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;