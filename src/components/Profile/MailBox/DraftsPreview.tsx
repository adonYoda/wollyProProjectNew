import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Rating, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useStarMessageMutation } from '../../../API/messageApi'
import { IDraft, IMessage, IState, IUser, IUserProfile } from '../../../types';
import { messagePageSizes } from '../../../utils/constants';

interface Props {
  recipient: string,
  subject: string,
  content: string,
  index: number,
  setDraftIndex: (value: number) => void;
}
const ListItemStyled = styled(ListItem)`
  max-height: ${messagePageSizes.heightRow}px;
  & .msg-preview{
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


const DraftsPreview: React.FC<Props> = ({ recipient, subject, content, index, setDraftIndex }) => {

  const user = useSelector<IState, IUser | undefined>((state) => state.user);


  return (
    <>
      <ListItemStyled style={{ width: '100%', height: '100%', backgroundColor: '#8EBAFF' }}
        onClick={() => setDraftIndex(index)}
      >
        <ListItemAvatar>
          <Avatar alt={user!.login} src={user!.login} />
        </ListItemAvatar>
        <ListItemText primary={subject} secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              to {recipient}: {content}
            </Typography>
          </React.Fragment>
        } />
      </ListItemStyled>
      <Divider />
    </>)
}

export default DraftsPreview