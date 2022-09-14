import { Avatar, Container, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { IMessage } from "../../../types";

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

  const { author, subject, content, stared, id, dateCreated } = { ...dataMessage }


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
    </MyContainer>
  );
};

export default MessageFull;
