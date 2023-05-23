import React from "react";
import userReducer from "../reducers/user.reducer.";

const initialState = { user: null };
const UserStateContext = React.createContext();
const UserDispatchContext = React.createContext();

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(userReducer, initialState);
  
    return (
      <UserStateContext.Provider value={state}>
        <UserDispatchContext.Provider value={dispatch}>
          {children}
        </UserDispatchContext.Provider>
      </UserStateContext.Provider>
    );
};

export const useUserState = () => {
    const context = React.useContext(UserStateContext);
    if (context === undefined) {
      throw new Error("useUserState must be used within a UserProvider");
    }
  
    return context;
};
  
export const useUserDispatch = () => {
    const context = React.useContext(UserDispatchContext);
    if (context === undefined) {
      throw new Error("useUserDispatch must be used within a UserProvider");
    }
  
    return context;
};

export const useUser = () => [useUserState(), useUserDispatch()];