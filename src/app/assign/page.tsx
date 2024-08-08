import Container from '@/components/Container'
import Wrap from '@/components/Wrap'
import React from 'react'
import RegisterForm from './RegisterForm'
import { getCurrectUser } from '@/actions/getCurrentUser'

const Register = async () => {
  const currentUser = await getCurrectUser()
  return (
    <Container>
        <Wrap>
            <RegisterForm currentUser = {currentUser}/>
        </Wrap>
      
    </Container>
  )
}

export default Register
