import logo from "../images/Icons/Loggo Button.svg";
import SignIn from "./Accounting/SignInButton";
import Search from "./Search";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const MyHeader = styled.div`
  width: 1920px;
  height: auto;
  padding: 10px 20px;
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
 
  height: 201px;
`;

const MySearch = styled.div`
width: 40%;
display: flex;
flex-direction: row;
justify-content: space-around;
margin-top: 6vw;
margin-right: 3em;
`

const Header = () => {
 

  return (
    <MyHeader>
      <Container>
        <MyLink to="/">
          <img src={logo} alt="WollyProLogo" title="Wolly Pro" />
        </MyLink>
        <MySearch>
        <Search />
        <SignIn /> 
        </MySearch>
      </Container>
      <Navigation />
    </MyHeader>
  );
};

export default Header;
