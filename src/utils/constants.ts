import { Jewellery } from "../types";

import jewel1 from '../images/Images/1_Stein_Ring_165.jpg'
import jewel2 from '../images/Images/1_Stein_Ring.163.jpg'
import jewel3 from '../images/Images/3_Stone_RIng.150.jpg'
import jewel4 from '../images/Images/Kasten_Fassung_RIng.167.jpg'
import jewel5 from '../images/Images/Krappen_Fassung_RIng.168.jpg'
import jewel6 from '../images/Images/2xStones_01.143.jpg'
import jewel7 from '../images/Images/4xStones_01.136.jpg'


export const CLIENT_ID = "Ac8wqS6_Iq898YSGlMSN2gPnaGdoncDa19XE-8DWbr1KqDLVgwLh-L1JAq98XJQB43Q0BO2nbp8k1Yms";
export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const loginRegex = /^[A-Za-z0-9_-]{3,16}$/;
export const createToken = (login: string, password: string) =>
  `${window.btoa(login + ":" + password)}`;
// <URLs> ==============================================================================
export const baseUrl = "https://wollypro.fly.dev";
export const baseUrlStripe = "https://api.stripe.com";
export const baseUrlPayPalSandbox = "https://api-m.sandbox.paypal.com"
export const baseUrlPayPalLive = "https://api-m.paypal.com"
//export const baseUrl = "http://localhost:3001"
export const homePage = "/";
export const profilePage = "/profile";
export const registrationPage = "/registration";
export const shippingPage = "/shipping";
export const faqPage = "/faq";
export const profilePages = {
  introPage: "/",
  mailBoxPage: "/mailbox",
  paymentMethodsPage: "/paymentMethods",
  purchaseHistoryPage: "/purchaseHistory",
  savedPage: "/saved",
  ordersPage: "/orders",
  myAccountPage: "/myAccount",
  setUpPage: "/setup",
}
// </URLs> ==============================================================================
// <Media sizes> ===========================================================================================
export const maxWidth = 1920;
export const containerWidth = 1596;
export const mdWidth = 1200;
export const mdWidth2 = 940;
// </Media sizes> ==========================================================================================
// <MessagePages> ===========================================================================================
export const messagePageSizes = {
  heightRow: 100,
  limitMessagesOnPage: 8
};
// </MessagePages> ===========================================================================================
// <COLORS> ===========================================================================================
export const colors = {
  button: {
    border: {
      main: '#70707099',
      hover: '#FFFFFFA6',
    },
    bg: {
      main: '#00000029',
    },
  }
}
// </COLORS> ===========================================================================================
// <CategoryName> ===========================================================================================
export const categoryName = {
  sent: "sent",
  drafts: "drafts",
  inbox: "inbox",
  unread: "unread",
  stared: "stared",
  deleted: "deleted",
  newMessage: "newMessage",

}
// </CategoryName> ==========================================================================================
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
