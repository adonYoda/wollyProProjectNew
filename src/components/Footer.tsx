import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Facebook, Instagram, Twitter } from "../iconComponents";
import { MyContainer } from "../styles/Container.styled";

const Title = styled.h2`
  font-size: 24px;
  font-family: "Muli";
  color: #e7e7e7;
`;

const MyContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 45px;
`;

const MySection = styled.div`
  text-align: left;
`;

const MyFooter = styled.div`
  min-width: 100%;
  padding: 50px 0;
  background-color: #1b252c;
  border-top: 1px solid #545d63;
  border-bottom: 1px solid #545d63;
  position: relative;
  z-index: 2;
`;
const TextFollowUs = styled.div`
  color: #545d63;
`;

const MyLink = styled(Link)`
  text-decoration: none;
  color: #545d63;
`;

const DownFooter = styled.div`
  color: rgba(84, 93, 99, 1);
  font-size: 36px;
  font-family: IBM Plex Sans;
  height: 64px;
  padding: 14px;
  width: 100%;
`;

const Footer = () => {
  return (
    <>
      <MyFooter>
        <MyContainer>
          <MyContent>
            <MySection>
              <Title>Account</Title>
              <ul>
                <li><MyLink to="/signIn">Sign In</MyLink></li>
                <li><MyLink to="/registration">Register</MyLink></li>
                <li><MyLink to="/orderStatus">Order Status</MyLink></li>
              </ul>
            </MySection>
            <MySection>
              <Title>About Us</Title>
              <ul>
                <li><MyLink to="/ourStory">Our Story</MyLink></li>
                <li><MyLink to="/careers">Careers</MyLink></li>
              </ul>
            </MySection>
            <MySection>
              <Title>Help</Title>
              <ul>
                <li><MyLink to="/contactUs">Contact Us</MyLink></li>
                <li><MyLink to="/orderStatus">Order Status</MyLink></li>
                <li><MyLink to="/returns">Returns</MyLink></li>
              </ul>
            </MySection>
            <MySection style={{ width: 400 }}>
              <Title> Follow Us! </Title>
              <TextFollowUs>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, vel?
                Veritatis optio distinctio, nobis exercitationem debitis, ea ipsum
                tempora cumque, atque ad qui voluptatum dicta dolor expedita natus
                vitae dolorem?
              </TextFollowUs>
              {/* <Instagram />
            <Facebook />
            <Twitter /> */}
            </MySection>
          </MyContent>
        </MyContainer>
      </MyFooter>
      <DownFooter>
        <MyContainer>
          Wolly Pro <span>© Company Name Address Ave, City Name, State ZIP</span>
        </MyContainer>
      </DownFooter>
    </>
  );
};

export default Footer;
