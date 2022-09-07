import { Functions } from '@mui/icons-material'
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Rating, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useStarMessageMutation } from '../../../API/messageApi'
import { RootState } from '../../../store/configureStore'
import { IState, IUserProfile } from '../../../types'

interface Props {
  data: []
}


const MessagePreview: React.FC<Props> = ({ data }) => {
  const [addStar, {isError}] = useStarMessageMutation();
  const [isStared, setValue] = useState<boolean | null>(false)
  const handleClick = async (id: any, stared: any) => {
    
   const starMessage = await addStar({id, isStared}).unwrap()
    console.log(starMessage);
    
  }

  return (

    <List style={{ width: '100%', height: '100%', padding: '0px' }}>
      {data.map(({ author, subject, content, stared, id }) => (<>
        <ListItem button key={id} style={{ width: '100%', height: '100%', backgroundColor: '#8EBAFF' }} >
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
            </React.Fragment>
          } />
         {isStared && <Rating defaultValue={1} max={1} onClick = {() => {
          handleClick(id, stared)
        setValue(stared) 
        }}/>
         || <Rating defaultValue={0} max={1} onClick = {() => {handleClick(id, stared)
          setValue(stared) 
         }} />}
        </ListItem>
        <Divider />
      </>
      ))
      }

    </List>

  )
}

export default MessagePreview