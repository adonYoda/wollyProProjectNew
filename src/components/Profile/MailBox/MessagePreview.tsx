import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Rating, Typography } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components';
import { useStarMessageMutation } from '../../../API/messageApi'
import { IMessage, IMessageResponse } from '../../../types';
import { categoryName, messagePageSizes } from '../../../utils/constants';

interface Props {
  author: string,
  subject: string,
  content: string,
  stared: boolean,
  id: string,
  dateCreated: string,
  trashed: boolean,
  sent: boolean,
  recipient: string,
  read: boolean,
  handlerID: ({ author, subject, content, stared, id, dateCreated, sent, recipient, read }: IMessageResponse) => void
  handlerFlag: (flag: boolean) => void;
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


const MessagePreview: React.FC<Props> = ({ author, subject, content, stared, id, dateCreated, trashed, sent, recipient, read, handlerID, handlerFlag}) => {
  const [addStar, { isError }] = useStarMessageMutation();
  const [isStared, setValue] = useState<boolean | null>(false);

  //==============================

  const temp = new Date(dateCreated)
  const date = temp.toLocaleString('en-US');


  //==============================


  const handleClick = async (id: string, stared: boolean) => {

    const starMessage = await addStar({ id, isStared }).unwrap()
    console.log(starMessage);
    console.log(date);

  }

  return (

    <>

      <ListItemStyled style={{ width: '100%', height: '100%', backgroundColor: '#8EBAFF' }}
        onClick={(e) => {
            handlerID({ author, subject, content, stared, id, dateCreated, trashed, sent, recipient, read })
            handlerFlag(true)
        }}
      >
        <ListItemAvatar>
          <Avatar alt={author} src={author} />
        </ListItemAvatar>
        <ListItemText primary={subject} secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {author}
            </Typography>
            <span className='msg-preview__text'>{` - ${content}`}</span>
          </React.Fragment>
        } />
        <span className='msg-preview__date'>{`${date}`}</span>
        <Rating defaultValue={stared ? 1 : 0} max={1} onClick={(e) => {
          e.stopPropagation();
          handleClick(id, !stared)
          setValue(!stared)
        }} />
      </ListItemStyled>
      <Divider />
    </>)
}

export default MessagePreview