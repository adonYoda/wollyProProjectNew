import { Grid } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import ListDividers from './MenuMailBox'
import MessagePreview from './MessagePreview'


const Container = styled.div`
    width: 850px;
    height: 400px;
    display: flex;
    margin: 0 5px;
`



const MailPage = () => {
  return (
    
      <Container>
        <Grid  container spacing={2} >
            <Grid style={{padding: '1'}} item xs={3}>
            <ListDividers/>
            </Grid>
            <Grid item xs={9}>
        <MessagePreview />
        </Grid>
        </Grid>
      </Container>

    
  )
}

export default MailPage