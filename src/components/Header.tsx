import logo from "../images/Icons/LoggoButton.svg";
import SignIn from "./Accounting/SignInButton";
import Search from "./Search";
import Navigation from "./Navigation";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { MyContainer } from "../styles/Container.styled";
import ProfilePageTitle from "./Profile/ProfilePageTitle";
import { useSelector } from "react-redux";
import { IState } from "../types";
import { homePage, profilePage, registrationPage } from "../utils/constants";

const MyHeader = styled.div`
  min-width: 100%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 30px 100px 30px 0px;
`;

const MyLink = styled.div`
  margin-top: 20px;
  height: 201px;
  cursor: pointer;
`;

const MySearch = styled.div`
max-width: 40%;
display: flex;
flex: 1 0 100%;
flex-direction: row;
justify-content: flex-end;
align-items: center;
position: relative;
  & .login_button {
    margin: 0px 110px 0px 0px;
  }
`
const MySignUp = styled(Link)`
  color: #EA4680;
  cursor: pointer;
  text-decoration: none;
  position: absolute;
  top: auto;
  right: 0;
  &:before {
    content: '/';
    margin: 0px 5px 0px 0px;
    font-size: 30px;
  }
`

const Header = () => {

  const token = useSelector<IState>(state => state.token!.token) as string;
  const navigate = useNavigate();
  const onProfilePage = window.location.pathname === profilePage;

  return (
    <MyHeader>
      <MyContainer>
        <Content>
          <MyLink onClick={() => {
            navigate(homePage);
          }}>
            <img src={logo} alt="WollyProLogo" title="Wolly Pro" />
          </MyLink>
          {onProfilePage && <ProfilePageTitle />}
          <MySearch>
            {!onProfilePage && <Search />}
            <SignIn token={token} />
            {!token && <MySignUp to={registrationPage} >SignUp</MySignUp>}
          </MySearch>
        </Content>
        {!onProfilePage && <Navigation />}
      </MyContainer>
    </MyHeader>
  );
};

export default Header;
