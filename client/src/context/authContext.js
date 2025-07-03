import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer((state, action) => {
    }

})