import { Button, Stack, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";

import DraftsIcon from "@mui/icons-material/Drafts";
import { useAddMessageMutation } from "../../../API/messageApi";
import { useDispatch } from "react-redux";
import  { setDrafts } from "../../../store/draftMessageSlice";

// const ContainerStyled = styled(Container)`
const ContainerStyled = styled.div`
  background: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  & textarea {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
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
    recipient: "",
    subject: "",
    content: "",
  });

  const dispatch = useDispatch()

  const [addMessage, { isError, isLoading }] = useAddMessageMutation({});

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessageState((prev) => ({ ...prev, [name]: value }));

  const handleAddMessage = async () => {
    console.log(messageState);
    const response = await addMessage(messageState).unwrap();
    console.log(response);

    setMessageState(prev => ({ ...prev, recipient: '', subject: '', content: '' }));

  };

  return (
    <ContainerStyled>
      <TextField
        fullWidth
        name="recipient"
        label="enter recipient"
        variant="filled"
        onChange={handleChange}
        value={messageState.recipient}
      />
      <TextField
        fullWidth
        name="subject"
        label="enter subject"
        variant="filled"
        onChange={handleChange}
        value={messageState.subject}
      />
      <textarea
        name="content"
        style={{ outline: "0" }}
        onChange={handleChange}
        value={messageState.content}
      />
      <Stack direction="row" spacing={1}>
        <Button
          // onClick={() =>
          //   dispatch(setDrafts([messageState]))
          // }
          startIcon={<DraftsIcon style={{ fill: "#1976D2" }} />}
        >
          Save to drafts
        </Button>
        <Button
          endIcon={<SendIcon style={{ fill: "#1976D2" }} />}
          onClick={handleAddMessage}
        >
          Send
        </Button>
      </Stack>
    </ContainerStyled>
  );
};
export default InputOutcomingMessage;
