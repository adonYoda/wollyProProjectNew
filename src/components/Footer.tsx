import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Facebook, Instagram, Twitter } from "../iconComponents";

const Title = styled.h2`
  font-size: 24px;
  font-family: "Muli";
  color: #e7e7e7;
`;

const MySection = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const MyFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  width: 1920px;
  height: auto;
  margin: 0 auto;
  background-color: #1b252c;
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
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 64px;
  padding: 14px;
`;

const Footer = () => {
  return (
    <>
      <MyFooter>
        <MySection>
          <Title>Account</Title>
          <MyLink to="/signIn">Sign In</MyLink>
          <MyLink to="/registrationPage">Register</MyLink>
          <MyLink to="/orderStatus">Order Status</MyLink>
        </MySection>

        <MySection>
          <Title>About Us</Title>
          <MyLink to="/ourStory">Our Story</MyLink>
          <MyLink to="/careers">Careers</MyLink>
        </MySection>

        <MySection>
          <Title>Help</Title>
          <MyLink to="/contactUs">Contact Us</MyLink>
          <MyLink to="/orderStatus">Order Status</MyLink>
          <MyLink to="/returns">Returns</MyLink>
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
      </MyFooter>
      <DownFooter>
        Wolly Pro <span>© Company Name Address Ave, City Name, State ZIP</span>
      </DownFooter>
    </>
  );
};

export default Footer;
