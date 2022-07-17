import { PUT_TOKEN, PUT_USER } from "../actions/accountAction";
import { IAction, IState } from "../types";

const initialState = {};

export const rootReducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case PUT_USER:
      return { ...state, user: action.payload };
    case PUT_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};
