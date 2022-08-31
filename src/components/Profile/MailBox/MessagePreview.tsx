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
        {data}
    </Container>
  )
}

export default MessagePreview