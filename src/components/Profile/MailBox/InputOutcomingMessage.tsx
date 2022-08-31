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
      <TextField fullWidth name="recepient" label="enter recepient"  onChange={handleChange} />
      <TextField fullWidth name="subject" label="enter subject"  onChange={handleChange} />
      <TextField
       style={{ width: "100%" }}
        id="standard-multiline-flexible"
        label="Multiline"
        multiline
        // maxRows={8}
        name="message"
        onChange={handleChange}
        variant="standard"
      />
    </Container>
  );
};

export default InputOutcomingMessage;
