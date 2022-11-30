import { Alert, AlertTitle, Stack } from "@mui/material";
import { PayPalButtons } from "@paypal/react-paypal-js";
import React, { useState } from "react";

const PayPalCheckoutButton = (props: any) => {
  const { product } = props;
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState<any>(null)

  const handleApprove = (orderId: any) => {
    // call backend function to fulfill order

    // if response is success
    setPaidFor(true);

    // refresh user's account or subscriptions status

    // if the response is error
    // setError("Ooooops... something went wrong...")
  };

  if(paidFor) {
    //Display success message or redirect user to success page
    <Alert severity="info">
    <AlertTitle>Info</AlertTitle>
    This is an info alert — <strong>check it out!</strong>
  </Alert>
  }

  if (error){
    <Stack sx={{ width: '100%' }} spacing={2}>
    <Alert severity="error">
    <AlertTitle>Error</AlertTitle>
    This is an error alert — <strong>check it out!</strong>
  </Alert>
  </Stack>
  }

  return (
    <PayPalButtons
      style={{ color: "silver" }}
      onClick = {(data, actions)=>{
         //Validate on button click, client or server side
         const hasAlreadyBoughtJewel = true;

         if(hasAlreadyBoughtJewel){
          setError("You already buy this jewel")
          return actions.reject()
         }else{
          return actions.resolve()
         }
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: product.description,
              amount: {
                value: product.price,
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order!.capture();
        console.log("order", order);
        handleApprove(data.orderID);
      }}
      onCancel = {()=>{
        //Display cancel message, modal or cancel page or back to cart
      }}
      onError = {(err)=>{
        setError(err);
        console.error(err);
        
      }}
    />
  );
};

export default PayPalCheckoutButton;
