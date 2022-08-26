import React from 'react'
import styled from 'styled-components'
import MessagePreview from './MessagePreview'


const Container = styled.div`
    width: 850px;
    height: 500px;
    background-color: blue;
    display: flex;
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