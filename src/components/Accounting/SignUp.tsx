import { Button } from '@mui/material'
import React, { useState } from 'react'
import { RegistrationPage } from './RegistrationForm'

const SignUp = () => {
    const [isVisible, setIsVisible] = useState(false)
   

  return (
    <>
    <Button onClick={() => setIsVisible((prev) => !prev)} >Register...</Button>
    {isVisible && <RegistrationPage/>}
    </>
  )
}

export default SignUp