import { createContext, useContext, useState } from "react";

export const UserContext = createContext(
    {
        Fname:[],
        addName:(Fname)=>{},
        clearName:()=>{},
        clearSName:(id)=>{},
    }
);

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = UserContext.Provider
