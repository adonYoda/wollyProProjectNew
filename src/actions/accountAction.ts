import { Dispatch, IUserProfile } from "../types";
import { baseUrl } from "../utils/constants";

export const PUT_TOKEN = "PUT_TOKEN";
export const PUT_USER = "PUT_USER";

export const putUserAction = (userProfile: IUserProfile) => {
  return {
    type: PUT_USER,
    payload: userProfile,
  };
};

export const putTokenAction = (token: string) => {
  return {
    type: PUT_TOKEN,
    payload: token,
  };
};

export const getUser = (token: string) => {
  return (dispatch: Dispatch) => {
    fetch(`${baseUrl}login`, {
      method: "POST",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status.toString());
        }
      })
      .then((userProfile) => {
        dispatch(putUserAction(userProfile));
        dispatch(putTokenAction(token));
        console.log(token);
      })
      .catch((e) => {
        console.log(e.mesage);
      });
  };
};
