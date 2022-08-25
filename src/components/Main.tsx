import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router";
import styled from "styled-components";
import { IState } from "../types";
import { homePage, profilePage } from "../utils/constants";
import Brooches from "./Brooches";
import Chains from "./Chains";
import Earrings from "./Earrings";
import FashionRings from "./FashionRings";
import GoldRings from "./GoldRings";
import HomePage from "./HomePage";
import KidsJewellery from "./KidsJewellery";
import MensRings from "./MensRings";
import Necklaces from "./Necklaces";
import Pendants from "./Pendants";
import { RegistrationPage } from "./Accounting/RegistrationForm";
import ProfilePage from "./Profile";

const MyRoutes = styled(Routes)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 1920px;
  height: auto;
  
`




const Main = () => {
  const token = useSelector<IState, string | undefined | null>(
    (state) => state.token
  );

  return (
    <MyRoutes>
      <Route path={homePage} element={<HomePage />} />
      <Route path="/earrings" element={<Earrings />} />
      <Route path="/necklaces" element={<Necklaces />} />
      <Route path="/pendants" element={<Pendants />} />
      <Route path="/chains" element={<Chains />} />
      <Route path="/goldRings" element={<GoldRings />} />
      <Route path="/mensRings" element={<MensRings />} />
      <Route path="/kidsJewellery" element={<KidsJewellery />} />
      <Route path="/fashionRings" element={<FashionRings />} />
      <Route path="/brooches" element={<Brooches />} />
      <Route path="/registration" element={<RegistrationPage />} />
      {/* <Route path="/signInMenu" ADD LINK FOR SIGN IN MENU /> */}
      <Route path="/profile" element={!token ? <RegistrationPage /> : <Navigate to={profilePage} />} />
    </MyRoutes>
  );
};

export default Main;
