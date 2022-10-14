import React, { useState, useEffect } from "react";
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import "./Payment.css"


const stripePromise = loadStripe('pk_test_51LpwYfKTPEoHkIEJzBlguaLqQObTcIgeOtP3fVuD9ZC5m3KA8ejTFkzHC58kRRm4xmKaz6MyHQ5CwoGDfvLODz7g00O26Ipd75');
function PaymentMethodPage()  {

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="Payment">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}


export default PaymentMethodPage;
// padding: "260px 170px"






























// import { Box, Button, Grid, Typography } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import React from "react";
// import MethodCreditCard from "./MethodCreditCard";
// import MethodPayPal from "./MethodPayPal";

// const PaymentMethodPage = () => {
//   return (
//     <Grid container sx={{width:'100%'}}>
//       <Grid sx={{width: '100%'}} >
//         <Typography variant="subtitle1"  >Chose a payment method:</Typography>
//       </Grid>
//       <Grid container>
//       <Box
//           sx={{
//             display: "flex",
//             height: 600,
//             width: 400,
//             border: "1px solid white",
//             margin: "10px",
//             padding: "10px",
//           }}
//         >
//          <Typography variant="subtitle2" >FILL OUT:</Typography>
//         </Box>
//         <Box
//           sx={{
//             display: "flex",
//             height: 600,
//             width: 400,
//             border: "1px solid white",
//             alignItems: "center",
//             justifyContent: "center",
//             margin: "10px"
//           }}
//         >
//           <Button>
//             <AddIcon fontSize="large" />
//           </Button>
//         </Box>
//         {/* <MethodPayPal />
//         <MethodCreditCard /> */}
//       </Grid>
//     </Grid>
//   );
// };

// export default PaymentMethodPage;
// // padding: "260px 170px"
