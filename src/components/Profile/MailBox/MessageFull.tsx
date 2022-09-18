import { Avatar, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { IMessage } from "../../../types";
import DeleteIcon from '@mui/icons-material/Delete';
import { useTrashMessageMutation } from "../../../API/messageApi";

interface Props {
  dataMessage: IMessage | undefined;
  handlerFlag: (flag: boolean) => void;
}

const MyContainer = styled(Container)`
  background-color: aqua;
  width: 100%;
  height: 100%;
  position: relative;
  & .msg-btn-close {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 26px;
    line-height: 40px;
    background-color: transparent;
    transition: 0.2s all 0s ease-out;
    cursor: pointer;
    &:hover {
      transform: rotate(360deg) scale(1.3);

    }
  }
`

const MessageFull: React.FC<Props> = ({ dataMessage, handlerFlag }) => {
  // const [isTrashed, setIsTrashed] = useState(false);
  const { author, subject, content, stared, id, dateCreated } = { ...dataMessage }
  const [trashMessage, {isLoading, isError}] = useTrashMessageMutation()
  const handleTrashMessage = async () => {
    const message = await trashMessage({id, isTrashed: true})
    await handlerFlag(false)
    console.log(message);
    
  }

  return (
    <MyContainer>
      <Avatar src={author} alt={author} />

      <Typography
        variant="body1"
        sx={{ display: "inline" }}
        component="span"
        color="text.primary"

      >
        {author}
      </Typography>
      <Typography
        variant="body2"
        sx={{ display: "inline" }}
        component="span"
        color="text.primary"
      >
        {subject}
      </Typography>
      <Typography>
        {content}
      </Typography>
      <button className='msg-btn-close' onClick={() => handlerFlag(false)}>&#128169;</button>
      <Button
          endIcon={<DeleteIcon style={{ fill: "#1976D2" }} />}
          onClick={handleTrashMessage}
        >
          Delete
        </Button>
    </MyContainer>
  );
};

export default MessageFull;
