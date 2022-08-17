import styled from "styled-components";
import rectangle from "../images/Images/Rectangle 115.png";
import { jewelleryMain } from "../utils/constants";
import Jewel from "./Jewel";

const MyContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 806px;
  width: 1920px;
  margin: 0 auto;
`;


const HomePage = () => {
  return (
    
    
    <MyContainer>
     <div style={{ color: "white"}}>NEW</div>
      {jewelleryMain.map((item, index) => 
        <Jewel key={index} jewel={item} />
      )}
    </MyContainer>
  
  );
};

export default HomePage;
