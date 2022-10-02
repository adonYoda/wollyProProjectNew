import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import {
  useReadMessageMutation,
  useStarMessageMutation,
} from "../../../API/messageApi";
import { IMessageResponse } from "../../../types";
import { messagePageSizes } from "../../../utils/constants";

interface Props {
  author: string;
  subject: string;
  content: string;
  stared: boolean;
  id: string;
  dateCreated: string;
  trashed: boolean;
  sent: boolean;
  recipient: string;
  read: boolean;
  refetch: ()=>void;
  handlerID: ({
    author,
    subject,
    content,
    stared,
    id,
    dateCreated,
    sent,
    recipient,
    read,
  }: IMessageResponse) => void;
  handlerFlag: (flag: boolean) => void;
}
const ListItemStyled = styled(ListItem) <{ read: boolean }>`
  width: 100%;
  height: ${messagePageSizes.heightRow}px !important;
  background-color: ${({ read }) => (read ? "#c0d4f4" : "#8EBAFF")};
  & .msg-preview {
    &__text {
      color: ${({ read }) => (read ? "grey" : "black")};
    }
    &__date {
      color: ${({ read }) => (read ? "grey" : "black")};
      margin: 0px 25px 0px 0px;
      text-align: right;
    }
  }
  cursor: pointer;
`;

const MessagePreview: React.FC<Props> = ({
  author,
  subject,
  content,
  stared,
  id,
  dateCreated,
  trashed,
  sent,
  recipient,
  read,
  handlerID,
  handlerFlag,
  refetch
}) => {
  const [addStar, { isError }] = useStarMessageMutation();
  const [isStared, setValue] = useState<boolean | null>(false);
  const [readMessage, { isLoading }] = useReadMessageMutation();
  //==============================

  const temp = new Date(dateCreated);
  const date = temp.toLocaleString("en-US");

  //==============================

  const handleClick = async (id: string, stared: boolean) => {
    const starMessage = await addStar({ id, isStared }).unwrap();
    console.log(starMessage);
    console.log(date);
  };

  return (
    <>
      <ListItemStyled
        read={read}
        onClick={(e) => {
          handlerFlag(true);
          const response = readMessage({ id, isRead: true }).unwrap();
          handlerID({
            author,
            subject,
            content,
            stared,
            id,
            dateCreated,
            trashed,
            sent,
            recipient,
            read,
          });
        }}
      >
        <ListItemAvatar>
          <Avatar alt={author} src={author} />
        </ListItemAvatar>
        <ListItemText
          primary={subject === null ? " " : `${subject}`}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {author === null ? " " : `${author}`}
              </Typography>
              <span className="msg-preview__text">
                {content === null ? " " : ` - ${content}`}
              </span>
            </React.Fragment>
          }
        />
        <span className="msg-preview__date">{`${date}`}</span>
        <Rating
          defaultValue={stared ? 1 : 0}
          max={1}
          onClick={(e) => {
            e.stopPropagation();
            handleClick(id, !stared);
            setValue(!stared);
            refetch()
          }}
        />
      </ListItemStyled>
      <Divider />
    </>
  );
};

export default MessagePreview;
