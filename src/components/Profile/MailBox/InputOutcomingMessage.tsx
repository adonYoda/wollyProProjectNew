import { TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import styled from "styled-components";

// const ContainerStyled = styled(Container)`
const ContainerStyled = styled.div`
  background: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  & textarea {
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: 400;
    font-size: 1rem;
      background: whitesmoke;
      height: 100%;
      width: 100%;
      color: black;
      resize: none;
      line-height: 1.4;
      padding: 6px 12px;
  }
`;

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
    <ContainerStyled>
      <TextField fullWidth name="recepient" label="enter recepient" variant="filled" onChange={handleChange} />
      <TextField fullWidth name="subject" label="enter subject" variant="filled" onChange={handleChange} />
      <textarea name="message" />
    </ContainerStyled>
  );
};

export default InputOutcomingMessage;
