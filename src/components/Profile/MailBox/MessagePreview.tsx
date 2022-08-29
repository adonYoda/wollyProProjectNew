import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 105px;
    background-color: green;
`
interface Props {
  data: []
}


const MessagePreview: React.FC<Props>= ({data}) => {
  return (
    <Container>
        <h1>`${data}`</h1>
    </Container>
  )
}

export default MessagePreview