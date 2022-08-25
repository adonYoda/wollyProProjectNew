import { useSelector } from "react-redux";
import { IState, IUser } from "../types";

export function useAuth() {
  const { token, user } = useSelector((state) => state);

  return {
    isAuth: !!token,
    token,
    user,
  };
}