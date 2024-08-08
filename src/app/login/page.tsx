import Container from '@/components/Container'
import Wrap from '@/components/Wrap'
import React from 'react'
import LoginForm from './LoginForm'
import { getCurrectUser } from '@/actions/getCurrentUser'

const page = async () => {
  const currentUser = await getCurrectUser()
  return (
    <Container>
        <Wrap>
            <LoginForm currentUser = {currentUser}/>
        </Wrap>
      
    </Container>
  )
}

export default page
