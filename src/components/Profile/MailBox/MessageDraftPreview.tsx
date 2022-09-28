import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Rating, Typography } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components';
import { useStarMessageMutation } from '../../../API/messageApi'
import { IMessage } from '../../../types';
import { messagePageSizes } from '../../../utils/constants';

interface Props {
  subject: string,
  content: string,
  recipient: string,
  handlerID: ({ author, subject, content, stared, id, dateCreated }: IMessage) => void
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


const MessageDraftPreview: React.FC<Props> = ({  subject, content, recipient, handlerID, handlerFlag }) => {
  const [addStar, { isError }] = useStarMessageMutation();
  const [isStared, setValue] = useState<boolean | null>(false);

  //==============================



  //==============================


  const handleClick = async (id: string, stared: boolean) => {

    const starMessage = await addStar({ id, isStared }).unwrap()
    console.log(starMessage);
   

  }

  return (
   
  <>
  
    <ListItemStyled style={{ width: '100%', height: '100%', backgroundColor: '#8EBAFF' }}
//      onClick={()=> {handlerID({ subject, content, recipient})
//      handlerFlag(true)
//   }}
    >
      <ListItemAvatar>
        <Avatar />
      </ListItemAvatar>
      <ListItemText primary={subject} secondary={
        <React.Fragment>
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
           
          </Typography>
          <span className='msg-preview__text'>{` - ${content}`}</span>
        </React.Fragment>
      } />
      
      
    </ListItemStyled>
    <Divider />
  </>)
}

export default MessageDraftPreview