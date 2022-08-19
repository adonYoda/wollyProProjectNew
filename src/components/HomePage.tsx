import styled from "styled-components";
import rectangle from "../images/Images/Rectangle 115.png";
import { MyContainer } from "../styles/Container.styled";
import { jewelleryMain } from "../utils/constants";
import Jewel from "./Jewel";

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
`;


const HomePage = () => {
  return (


    <MyContainer>
      <Content>
        <div style={{ color: "white" }}>NEW</div>
        {jewelleryMain.map((item, index) =>
          <Jewel key={index} jewel={item} />
        )}
      </Content>
    </MyContainer>

  );
};

export default HomePage;
