import { Avatar, Container, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { IMessage } from "../../../types";

interface Props {
 dataMessage: IMessage|undefined;
}

const MyContainer = styled(Container)`
  background-color: aqua;
  width: 100%;
  height: 100%;
`

const MessageFull: React.FC<Props> = ({dataMessage}) => {

  const {author, subject, content, stared, id, dateCreated} = {...dataMessage}


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
    </MyContainer>
  );
};

export default MessageFull;
