import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'
import { IState, IUserProfile } from '../../../types'

interface Props {
  data: []
}


const MessagePreview: React.FC<Props> = ({data}) => {

  const user = useSelector<IState, IUserProfile>(state => state.user!);
  


  return (
    
      <List style={{width: '100%', height: '100%', padding: '0px'}}> 
      {data.map(({author, subject, content}, id) => (<>
          <ListItem button key={id} style={{width: '100%', height: '100%', backgroundColor: '#8EBAFF'}} >
            <ListItemAvatar>
              <Avatar alt={user.login} src={user.profilePicture} />
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
          </ListItem>
           <Divider/>
           </>
        ))
        }
     
      </List>
   
  )
}

export default MessagePreview