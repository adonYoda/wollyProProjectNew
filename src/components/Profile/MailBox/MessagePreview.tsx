import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

interface Props {
  messages: any
}


const MessagePreview: React.FC<Props> = ({messages}) => {

  console.log(messages);
  


  return (
    
      <List style={{width: '100%', height: '100%'}}> 
      {/* {messages.map(({author, subject, content}, id) => (
          <ListItem button key={id} style={{width: '100%', height: '100%'}} >
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={""} />
            </ListItemAvatar>
            <ListItemText primary={subject} secondary={content} />
            <Divider variant="inset" component="li" />
          </ListItem>
        ))
        }
      */}
      </List>
   
  )
}

export default MessagePreview