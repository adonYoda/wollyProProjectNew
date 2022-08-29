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
  user?: IUserProfile | null;
  token?: { token: string } | null;
}

export interface IAction {
  type: string;
  payload?: any;
}

export interface IUserProfile extends IUser { }

export interface IUserRegister extends IUser { }

export type GetState = () => IState;

export type Dispatch = (action: IAction | FuncAction) => void;

export type FuncAction = (dispatch: Dispatch) => void;

export interface Jewel {
  id: string;
  type: string;
  option: string[]
  seller: string;
  description: string;
  price: string;
  img: string;
  urls: string[];
}

export interface Jewellery {
  [key: string]: Jewel
}


export interface IMessage {
  recipient: string;
  subject: string;
  content: string;
}

export interface IMessageResponse extends IMessage {
  id: string;
  author: string;
  dateCreated: Date;
  read: boolean;
  stared: boolean;
  sent: boolean;
  trashed: boolean;
}

export interface IMessageQuery {
  limit: number;
    page: number;
    token: string;
    folder: string;
}