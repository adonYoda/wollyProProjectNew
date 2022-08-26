import { Jewellery } from "../types";

import jewel1 from '../images/Images/1_Stein_Ring_165.jpg'
import jewel2 from '../images/Images/1_Stein_Ring.163.jpg'
import jewel3 from '../images/Images/3_Stone_RIng.150.jpg'
import jewel4 from '../images/Images/Kasten_Fassung_RIng.167.jpg'
import jewel5 from '../images/Images/Krappen_Fassung_RIng.168.jpg'
import jewel6 from '../images/Images/2xStones_01.143.jpg'
import jewel7 from '../images/Images/4xStones_01.136.jpg'



export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const loginRegex = /^[A-Za-z0-9_-]{3,16}$/;
export const createToken = (login: string, password: string) =>
  `${window.btoa(login + ":" + password)}`;
// <URLs> ==============================================================================
export const baseUrl = "https://wollypro.herokuapp.com";
//export const baseUrl = "http://localhost:3001"
export const homePage = "/";
export const profilePage = "/profile";
export const registrationPage = "/registration";
export const shippingPage = "/shipping";
export const faqPage = "/faq";
export const profilePages = {
  introPage: profilePage + "/",
  mailBoxPage: profilePage + "/mailbox",
  paymentMethodsPage: profilePage + "/paymentMethods",
  purchaseHistoryPage: profilePage + "/purchaseHistory",
  savedPage: profilePage + "/saved",
  ordersPage: profilePage + "/orders",
  myAccountPage: profilePage + "/myAccount",
  setUpPage: "/setup",
}
// </URLs> ==============================================================================

export const jewellery: Jewellery = {
  Title1: {
    id: "1",
    type: "Gold Rings",
    option: ["silver", "gold"],
    seller: "Jean Lao",
    description: "It is a beautiful gold ring for ladys",
    price: "130",
    img: jewel1,
    urls: [
      "https://www.picture.com/url?sa=i&url",
      "https://www.picture.com/url?sa=i&url",
    ],
  },
  Title2: {
    id: "2",
    type: "Gold Rings",
    option: ["silver", "gold"],
    seller: "Jean Lao",
    description: "It is a beautiful gold ring for ladys",
    price: "130",
    img: jewel2,
    urls: [
      "https://www.picture.com/url?sa=i&url",
      "https://www.picture.com/url?sa=i&url",
    ],
  },
  Title3: {
    id: "3",
    type: "Gold Rings",
    option: ["silver", "gold"],
    seller: "Jean Lao",
    description: "It is a beautiful gold ring for ladys",
    price: "130",
    img: jewel3,
    urls: [
      "https://www.picture.com/url?sa=i&url",
      "https://www.picture.com/url?sa=i&url",
    ],
  },
  Title4: {
    id: "4",
    type: "Gold Rings",
    option: ["silver", "gold"],
    seller: "Jean Lao",
    description: "It is a beautiful gold ring for ladys",
    price: "130",
    img: jewel4,
    urls: [
      "https://www.picture.com/url?sa=i&url",
      "https://www.picture.com/url?sa=i&url",
    ],
  },
  Title5: {
    id: "5",
    type: "Gold Rings",
    option: ["silver", "gold"],
    seller: "Jean Lao",
    description: "It is a beautiful gold ring for ladys",
    price: "130",
    img: jewel5,
    urls: [
      "https://www.picture.com/url?sa=i&url",
      "https://www.picture.com/url?sa=i&url",
    ],
  },
  Title6: {
    id: "6",
    type: "Gold Rings",
    option: ["silver", "gold"],
    seller: "Jean Lao",
    description: "It is a beautiful gold ring for ladys",
    price: "130",
    img: jewel6,
    urls: [
      "https://www.picture.com/url?sa=i&url",
      "https://www.picture.com/url?sa=i&url",
    ],
  },
  Title7: {
    id: "7",
    type: "Gold Rings",
    option: ["silver", "gold"],
    seller: "Jean Lao",
    description: "It is a beautiful gold ring for ladys",
    price: "130",
    img: jewel7,
    urls: [
      "https://www.picture.com/url?sa=i&url",
      "https://www.picture.com/url?sa=i&url",
    ],
  },
};

export const jewelleryMain = Object.keys(jewellery);
