import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Rating, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useStarMessageMutation } from '../../../API/messageApi'

interface Props {
  data: []
}


const MessagePreview: React.FC<Props> = ({ data }) => {
  const [addStar, { isError }] = useStarMessageMutation();
  const [isStared, setValue] = useState<boolean | null>(false);

  const handleClick = async (id: string, stared: boolean) => {

    const starMessage = await addStar({ id, isStared }).unwrap()
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
          <Rating defaultValue={stared} max={1} onClick={() => {
            handleClick(id, !stared)
            setValue(!stared)
          }} />
        </ListItem>
        <Divider />
      </>
      ))
      }

    </List>

  )
}

export default MessagePreview