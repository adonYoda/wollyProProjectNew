import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import styled from "styled-components";
import { IState } from "../types";
import { homePage, profilePage } from "../utils/constants";
import Brooches from "./Brooches";
import Chains from "./Chains";
import Profile from "./Accounting/Index";
import Earrings from "./Earrings";
import FashionRings from "./FashionRings";
import GoldRings from "./GoldRings";
import HomePage from "./HomePage";
import KidsJewellery from "./KidsJewellery";
import MensRings from "./MensRings";
import Necklaces from "./Necklaces";
import Pendants from "./Pendants";

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
      <Route path={homePage} element={token ? <Profile /> : <HomePage />} />
      <Route path="/earrings" element={<Earrings />} />
      <Route path="/necklaces" element={<Necklaces />} />
      <Route path="/pendants" element={<Pendants />} />
      <Route path="/chains" element={<Chains />} />
      <Route path="/goldRings" element={<GoldRings />} />
      <Route path="/mensRings" element={<MensRings />} />
      <Route path="/kidsJewellery" element={<KidsJewellery />} />
      <Route path="/fashionRings" element={<FashionRings />} />
      <Route path="/brooches" element={<Brooches />} />
    </MyRoutes>
  );
};

export default Main;
