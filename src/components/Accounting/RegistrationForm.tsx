import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'




export const RegistrationPage = () => {

  return (
    <Box
    style={{backgroundColor: "white"}}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        </Box>
  )
}
