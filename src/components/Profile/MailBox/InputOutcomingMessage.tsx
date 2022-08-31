import { TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";

const InputOutcomingMessage = () => {
  const [messageState, setMessageState] = useState({
    recepient: "",
    subject: "",
    message: "",
  });

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setMessageState((prev) => ({ ...prev, [name]: value }));

  return (
    <Container style={{ background: "white", height: "100%" }}>
      <TextField fullWidth name="recepient" label="enter recepient" variant="filled"  onChange={handleChange} />
      <TextField fullWidth name="subject" label="enter subject" variant="filled" onChange={handleChange} />
      <input style={{background: "whitesmoke", height: "70%", width: "100%", color:"black"}} type="text" name="message"/>
    </Container>
  );
};

export default InputOutcomingMessage;
