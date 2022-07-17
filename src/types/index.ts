export interface IUser {
  login: string;
  firstName: string;
  lastName: string;
  about: string;
  profilePicture: string;
  userPhotos: string[];
  phone: string;
  mail: string;
  addresses: IAddress[];
  roles: string[];
}

export interface IAddress {
  id: string;
  index: string;
  city: string;
  street: string;
  building: number;
  types: string[];
}


export interface IState {
  user?: IUserProfile;
  token?: string;
}

export interface IAction {
  type: string;
  payload?: any;
}

export interface IUserProfile extends IUser {}

export interface IUserRegister extends IUser {}

export type GetState = () => IState;

export type Dispatch = (action: IAction | FuncAction) => void;

export type FuncAction = (dispatch: Dispatch) => void;
