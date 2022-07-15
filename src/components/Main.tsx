import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import { State } from "../types";
import { homePage, profilePage } from "../utils/constants";
import Brooches from "./Brooches";
import Chains from "./Chains";
import Profile from "./Customer/Index";
import Earrings from "./Earrings";
import FashionRings from "./FashionRings";
import GoldRings from "./GoldRings";
import HomePage from "./HomePage";
import KidsJewellery from "./KidsJewellery";
import MensRings from "./MensRings";
import Necklaces from "./Necklaces";
import Pendants from "./Pendants";

const Main = () => {
  const token = useSelector<State, string | undefined | null>(
    (state) => state.token
  );

  return (
    <Routes>
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
    </Routes>
  );
};

export default Main;
