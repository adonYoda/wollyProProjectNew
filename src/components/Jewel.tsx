import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { jewellery } from "../utils/constants";

const MyJewel = styled.img`
  width: 266px;
  height: 381px;
  margin: 10px;
`;

interface Props {
  jewel: string;
}

const Jewel: React.FC<Props> = ({ jewel }) => {
  return <MyJewel src={jewellery[jewel].img} alt={jewellery[jewel].id} />;
};

export default Jewel;
