import React from 'react'
import styled from 'styled-components'
import MessagePreview from './MessagePreview'


const Container = styled.div`
    width: 850px;
    height: 100%;
    background-color: blue;
`




const MailPage = () => {
  return (
    <div>
        <Container>
        <MessagePreview/>
        </Container>

    </div>
  )
}

export default MailPage