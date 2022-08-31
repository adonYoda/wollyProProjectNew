import React from 'react'
import styled from 'styled-components'
import MessageFull from './MessageFull'
import MessagePreview from './MessagePreview'

const Container = styled.div`
    width: 100%;
    height: 105px;
    background-color: green;
`
interface Props {
  data: []
}


const Message: React.FC<Props>= ({data}) => {
  return (
    <Container>
        <MessagePreview/>
        <MessageFull/>
    </Container>
  )
}

export default Message