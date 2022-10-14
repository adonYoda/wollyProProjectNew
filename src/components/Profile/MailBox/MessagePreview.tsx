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
import { useStarMessageMutation } from "../../../API/messageApi";
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
  readMessage: ({ id, isRead }: { id: string; isRead: boolean }) => void;
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
  &.unstar {
    border: 5px solid red;
  }
  & .msg-preview {
    &__title {
      color: black;
    }
    &__date {
      color: ${({ read }) => (read ? "grey" : "black")};
      margin: 0px 25px 0px 0px;
      text-align: right;
    }
  }
  cursor: pointer;
`;
const MyListItemText = styled(ListItemText) <{ read: boolean }>`
  white-space: nowrap; //запрет на перенос текста
  height: 100%;
  width: 100%;
  overflow: hidden; //прятать выходящий за пределы текст
  text-overflow: ellipsis; //образка длинных блоков с текстом
  color: ${({ read }) => (read ? "grey" : "black")} !important;
  & > p {
    display: inline !important;
    color: ${({ read }) => (read ? "grey" : "black")};
  }
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
  readMessage,
}) => {
  const [addStar, { isError, isSuccess, isLoading }] = useStarMessageMutation();
  const [isStared, setIsStared] = useState<boolean | null>(stared);
  //==============================

  const temp = new Date(dateCreated);
  const date = temp.toLocaleString("en-US");

  //==============================

  const handleClick = async (id: string, isStared: boolean) => {
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
          const response = readMessage({ id, isRead: true });
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
        <MyListItemText
          read={read}
          primary={subject === null ? " " : `${subject}`}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                <span className="msg-preview__title">
                  {author === null ? " " : `${author}`}
                </span>
              </Typography>
              {content === null ? " " : ` - ${content}`}
            </React.Fragment>
          }
        />
        <span className="msg-preview__date">{`${date}`}</span>
        <Rating
          value={isStared ? 1 : 0}
          // defaultValue={isStared ? 1 : 0}
          max={1}
          onChange={(e) => setIsStared(prev => !prev)}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setIsStared(!stared);
            console.log('double click?');
            handleClick(id, !stared);
          }}
        />
      </ListItemStyled>
      <Divider />
    </>
  );
};

export default MessagePreview;
