import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Rating, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useStarMessageMutation } from '../../../API/messageApi'
import { messagePageSizes } from '../../../utils/constants';

interface Props {
  author: string,
  subject: string,
  content: string,
  stared: boolean,
  id: string,
  dateCreated: string,
}
const ListItemStyled = styled(ListItem)`
  max-height: ${messagePageSizes.heightRow}px;
`;


const MessagePreview: React.FC<Props> = ({ author, subject, content, stared, id, dateCreated }) => {
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

  return (<>
    <ListItemStyled style={{ width: '100%', height: '100%', backgroundColor: '#8EBAFF' }} >
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
          {` - ${content}`}
          <div>{`${date}`}</div>
        </React.Fragment>
      } />
      <Rating defaultValue={stared ? 1 : 0} max={1} onClick={() => {
        handleClick(id, !stared)
        setValue(!stared)
      }} />
    </ListItemStyled>
    <Divider />
  </>)
}

export default MessagePreview