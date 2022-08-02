import { Link } from "react-router-dom";
import styled from "styled-components";

const MyLinks = styled(Link)`
  text-decoration: none;
  color: white;
`;
const MyNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 5em;
  margin-right: 5em;
  text-align: center;
`;

const Navigation = () => {
  return (
    <MyNavigation>
      <MyLinks to="earrings">Earrings</MyLinks>
      <MyLinks to="necklaces">Necklaces</MyLinks>
      <MyLinks to="pendants">Pendants</MyLinks>
      <MyLinks to="chains">Chains</MyLinks>
      <MyLinks to="goldRings">Gold Rings</MyLinks>
      <MyLinks to="mensRings">Men's Rings</MyLinks>
      <MyLinks to="kidsJewellery">Kid's Jewellery</MyLinks>
      <MyLinks to="fashionRings">Fashion Rings</MyLinks>
      <MyLinks to="brooches">Brooches</MyLinks>
    </MyNavigation>
  );
};

export default Navigation;
