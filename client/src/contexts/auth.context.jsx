import React from "react";
import { authDefaultState } from "../reducers/auth.reducer";
import { authReducer } from "../reducers/auth.reducer";

export const AuthContext = React.createContext(authDefaultState);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(authReducer, authDefaultState);
    // If any value here is updated --> all consumer will be render
    // --> App re-render --> AllRoutes re-render
    return(
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>)
};