import logo from "../images/Icons/Loggo Button.svg";
import SignIn from "./Accounting/SignInButton";
import Search from "./Search";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { MyContainer } from "../styles/Container.styled";

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

const MyLink = styled(Link)`
  margin-top: 20px;
  margin-right: auto;
  /* flex: 1 1 auto; */
  height: 201px;
`;

const MySearch = styled.div`
max-width: 40%;
display: flex;
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
  /* margin: 0px 0px 0px 400px; */
  /* margin: 0px 0px 0px 20px; */
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

  const [token, setToken] = useState(false);


  return (
    <MyHeader>
      <MyContainer>
        <Content>
          <MyLink to="/">
            <img src={logo} alt="WollyProLogo" title="Wolly Pro" />
          </MyLink>
          <MySearch>
            <Search />
            <SignIn token={!!token} setToken={setToken} />
            {!token && <MySignUp to="/registration" >SignUp</MySignUp>}
          </MySearch>
        </Content>
        <Navigation />
      </MyContainer>
    </MyHeader>
  );
};

export default Header;
