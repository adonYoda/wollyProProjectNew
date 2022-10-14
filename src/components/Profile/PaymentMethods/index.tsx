import { Box, Button, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import MethodCreditCard from "./MethodCreditCard";
import MethodPayPal from "./MethodPayPal";

const PaymentMethodPage = () => {
  return (
    <Grid container sx={{width:'100%'}}>
      <Grid sx={{width: '100%'}} >
        <Typography variant="subtitle1"  >Chose a payment method:</Typography>
      </Grid>
      <Grid container>
      <Box
          sx={{
            display: "flex",
            height: 600,
            width: 400,
            border: "1px solid white",
            margin: "10px",
            padding: "10px",
          }}
        >
         <Typography variant="subtitle2" >FILL OUT:</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            height: 600,
            width: 400,
            border: "1px solid white",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px"
          }}
        >
          <Button>
            <AddIcon fontSize="large" />
          </Button>
        </Box>
        {/* <MethodPayPal />
        <MethodCreditCard /> */}
      </Grid>
    </Grid>
  );
};

export default PaymentMethodPage;
// padding: "260px 170px"
