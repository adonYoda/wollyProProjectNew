import { List } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import MessageFull from './MessageFull'
import MessagePreview from './MessagePreview'

const Container = styled.div`
    width: 100%;
    height: 105px;
`
interface Props {
  data: [];
}


const Message: React.FC<Props> = ({ data }) => {
  console.log('Message RENDER')
  return (<>
    <List style={{ width: '100%', height: '100%', padding: '0px' }}>
      {data.map(({ author, subject, content, stared, id }) => <MessagePreview key={id} author={author} subject={subject} content={content} stared={stared} id={id} />)}
    </List>
    {/* <MessageFull/> */}
  </>)
}

export default Message