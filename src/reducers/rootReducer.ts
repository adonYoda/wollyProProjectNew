import { PUT_TOKEN, PUT_USER } from "../actions/accountAction";
import { Action, State } from "../types";

const initialState = {};

export const rootReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case PUT_USER:
      return { ...state, user: action.payload };
    case PUT_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};
