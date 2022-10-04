import {
  Avatar,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { IMessage, IMessageResponse } from "../../../types";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  useDeleteMessageMutation,
  useTrashMessageMutation,
} from "../../../API/messageApi";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';

interface Props {
  dataMessage: IMessageResponse|undefined;
  handlerFlag: (flag: boolean) => void;
  refetch: () => void;
  readMessage: ({id, isRead}:{id:string| undefined, isRead:boolean})=>void;
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
`;


const MessageFull: React.FC<Props> = ({
  dataMessage,
  handlerFlag,
  refetch,
  readMessage
}) => {
  const [isTrashed, setIsTrashed] = useState(false);
  const { author, subject, content, stared, id, dateCreated, trashed } = {
    ...dataMessage,
  };
  const [trashMessage, { isLoading, isError }] = useTrashMessageMutation();
  const [deleteMessage] = useDeleteMessageMutation();
  const handleTrashMessage = async ({
    id,
    isTrashed,
  }: {
    id: string | undefined;
    isTrashed: boolean;
  }) => {
    const message = await trashMessage({ id, isTrashed });
    handlerFlag(false);
    refetch();
  };

  const handlerDeleteMessage = async () => {
    const response = await deleteMessage(id);
    handlerFlag(false);
    refetch();
  };

  //==========================================================================================================
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //==========================================================================================================

  return (
    <>
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
        <Typography>{content}</Typography>
        <button
          className="msg-btn-close"
          onClick={() => {
            handlerFlag(false);
            refetch();
          }}
        >
          &#128169;
        </button>
        {trashed === false ? (
          <>
          <Button
            endIcon={<DeleteIcon style={{ fill: "#1976D2" }} />}
            onClick={() => handleTrashMessage({ id, isTrashed: true })}
          >
            Delete
          </Button>
          <Button
          endIcon={<MarkAsUnreadIcon style={{ fill: "#1976D2" }} />}
          onClick={()=> {const response = readMessage({ id, isRead: false })
          handlerFlag(false);
          refetch()
        }}
        >
          Mark as Unread
        </Button>
        </>
        ) : (
          <>
            <Button
              endIcon={<DeleteForeverIcon style={{ fill: "#1976D2" }} />}
              onClick={() => {
                handleClickOpen();
              }}
            >
              Delete Forever
            </Button>
            <Button
              endIcon={<RestoreFromTrashIcon style={{ fill: "#1976D2" }} />}
              onClick={() => {
                handleTrashMessage({ id, isTrashed: false });
              }}
            >
              Remove to Inbox
            </Button>
          </>
        )}
      </MyContainer>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete message FOREVER!!!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button
            onClick={() => {
              handlerDeleteMessage();
              handleClose();
            }}
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
    //==========================================================================================================
  );
};

export default MessageFull;
