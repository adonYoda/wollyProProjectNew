import { Button } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import PayPalCheckoutButton from "./PayPalMethod/PayPalCheckoutButton";

// const Button = styled.div`
  
// `

const PaymentMethodPage = () => {
  const [product, setProduct] = useState({ description: "PayPal", price: 100 });

  return (
    <>
      <div>Your payment methods could have been here...</div>
      <Button variant="outlined" >
        <PayPalCheckoutButton product={product} />
      </Button>
    </>
  );
};

export default PaymentMethodPage;
