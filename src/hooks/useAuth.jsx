import { useSelector } from "react-redux";
import { IState, IUser } from "../types";

export function useAuth() {
  const { mail, token, login } = useSelector((state) => state.user);

  return {
    isAuth: !!mail,
    mail,
    token,
    login,
  };
}
