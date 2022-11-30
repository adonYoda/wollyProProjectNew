//import { Button } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import PayPalCheckoutButton from "./PayPalMethod/PayPalCheckoutButton";

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaymentMethodPage = () => {
  const [product, setProduct] = useState({ description: "PayPal", price: 100 });

  return <PayPalCheckoutButton product={product} />;
};

export default PaymentMethodPage;
