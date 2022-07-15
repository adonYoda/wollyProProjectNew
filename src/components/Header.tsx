import logo from "../images/Icons/Loggo Button.svg";
import SignIn from "./SignIn";
import Search from "./Search";
import Navigation from "./Navigation";
import IconBar from "./IconBar";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MyHeader = styled.div`
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  text-align: center;
`;

const MyLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 20px;
  width: 113px;
  height: 201px;
`;

const Header = () => {
  return (
    <MyHeader>
      <Container>
        <MyLink to="/">
          <img src={logo} alt="WollyProLogo" title="Wolly Pro" />
        </MyLink>
        <Search />
        <SignIn />
        <IconBar />
      </Container>
      <Navigation />
    </MyHeader>
  );
};

export default Header;
