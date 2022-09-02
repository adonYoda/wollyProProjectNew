import { Button, Stack, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import styled from "styled-components";
import SendIcon from '@mui/icons-material/Send';

import DraftsIcon from '@mui/icons-material/Drafts';
import { useAddMessageMutation } from "../../../API/messageApi";


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
    content: "",
  });

  const [addMessage, { isError, isLoading }] = useAddMessageMutation({})

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessageState((prev) => ({ ...prev, [name]: value }));

  const handleAddMessage = () => {
    console.log(messageState);
    const response = addMessage(
      messageState
    ).unwrap()
    console.log(response);

  }


  return (
    <ContainerStyled>
      <TextField fullWidth name="recepient" label="enter recepient" variant="filled" onChange={handleChange} />
      <TextField fullWidth name="subject" label="enter subject" variant="filled" onChange={handleChange} />
      <textarea name="content" style={{ outline: "0" }} onChange={handleChange} />
      {/* FIX ICONS!!! */}
      <Stack direction="row" spacing={1}  >
        <Button startIcon={< DraftsIcon />}>
          Save to drafts
        </Button>
        <Button endIcon={<SendIcon />}
          onClick={handleAddMessage}
        >
          Send
        </Button>
      </Stack>
    </ContainerStyled>
  );
};

export default InputOutcomingMessage;
