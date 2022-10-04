import { Button, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import { useAddMessageMutation } from "../../../API/messageApi";
import { useDispatch } from "react-redux";
import { addDraft } from "../../../store/draftMessageSlice";
import { IDraft } from "../../../types";

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

interface Props {
  draft?: IDraft;
  setDraft: (draft: IDraft) => void;
}

const InputOutcomingMessage: React.FC<Props> = ({ draft, setDraft }) => {
  const [messageState, setMessageState] = useState({
    recipient: draft?.recipient || "",
    subject: draft?.subject || "",
    content: draft?.content || "",
  });

  const dispatch = useDispatch()

  const [addMessage, { isError, isLoading }] = useAddMessageMutation({});

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessageState((prev) => ({ ...prev, [name]: value }));

  const handleAddMessage = async () => {
    const response = await addMessage(messageState).unwrap();
  };

  useEffect(() => {
    return setDraft({ recipient: '', subject: '', content: '' });
  }, [])

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
          onClick={() => {
            dispatch(addDraft(messageState))
          }}
          startIcon={<DraftsIcon style={{ fill: "#1976D2" }} />}
        >
          Save to drafts
        </Button>
        <Button
          endIcon={<SendIcon style={{ fill: "#1976D2" }} />}
          onClick={() => {
            setMessageState({ recipient: '', subject: '', content: '' });
            handleAddMessage();
          }}
        >
          Send
        </Button>
      </Stack>
    </ContainerStyled>
  );
};
export default InputOutcomingMessage;