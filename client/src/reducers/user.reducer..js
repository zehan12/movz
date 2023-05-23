import * as actions from "../actions/types";

const userReducer = (_, { type, payload }) => {
    console.log(_,"_",type,"type",payload,"payload")
    switch (type) {
      case actions.SET_USER: {
        return {
          user: payload.user,
        };
      }
      case actions.REMOVE_USER: {
        return {
            user:null
        }
      }
      default: {
        throw new Error(`Unhandled action type: ${type}`);
      }
    }
};
  
export default userReducer;