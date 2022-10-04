import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { removeDraft } from "../../../store/draftMessageSlice";
import { IDraft, IState, IUser } from "../../../types";
import { categoryName, messagePageSizes } from "../../../utils/constants";

interface Props {
  recipient: string;
  subject: string;
  content: string;
  index: number;
  setCategory: (category: string) => void;
  setDraft: (draft: IDraft) => void;
}
const ListItemStyled = styled(ListItem)`
  width: 100%;

  max-height: ${messagePageSizes.heightRow}px;
  & .msg-preview {
    &__text {
      color: black;
    }
    &__date {
      color: black;
      margin: 0px 25px 0px 0px;
    }
  }
  cursor: pointer;
`;

const DraftsPreview: React.FC<Props> = ({
  recipient,
  subject,
  content,
  index,
  setCategory,
  setDraft,
}) => {
  const user = useSelector<IState, IUser | undefined>((state) => state.user);

  const dispatch = useDispatch();

  return (
    <>
      <ListItemStyled
        style={{ width: "100%", height: "100%", backgroundColor: "#8EBAFF" }}
        onClick={() => {
          setCategory(categoryName.newMessage);
          setDraft({ recipient, subject, content });
        }}
      >
        <ListItemAvatar>
          <Avatar alt={user!.login} src={user!.login} />
        </ListItemAvatar>
        <ListItemText
          primary={subject}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to {recipient}: {content}
              </Typography>
            </React.Fragment>
          }
        />
        <DeleteIcon
          onClick={(e) => {
            e.stopPropagation();
            dispatch(removeDraft(index));
          }}
        />
      </ListItemStyled>
      <Divider />
    </>
  );
};

export default DraftsPreview;
