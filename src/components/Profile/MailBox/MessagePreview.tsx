import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Rating, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useStarMessageMutation } from '../../../API/messageApi'
import { IState, IUserProfile } from '../../../types'

interface Props {
  data: []
}


const MessagePreview: React.FC<Props> = ({data}) => {

  const [star, setStar] = useState(false)
  


  return (
    
      <List style={{width: '100%', height: '100%', padding: '0px'}}> 
      {data.map(({author, subject, content, stared, id}) => (<>
          <ListItem button key={id} style={{width: '100%', height: '100%', backgroundColor: '#8EBAFF'}} >
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
            <Rating defaultValue={+star} max={1}
            onClick={()=>{
              try{
                setStar((prev)=>!prev)
                //const star = useStarMessageMutation({id, stared})
              }
              catch{
          
              }
            }}
            />
          </ListItem>
           <Divider/>
           </>
        ))
        }
     
      </List>
   
  )
}

export default MessagePreview