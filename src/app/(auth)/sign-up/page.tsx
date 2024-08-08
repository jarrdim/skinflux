import SignUpForm from '@/components/form/SignUpform'
import React from 'react'
import { getCurrectUser } from '@/actions/getCurrentUser'

const page = async () => {
  const currentUser = await getCurrectUser()
  return (
    <div>
        <SignUpForm  currentUser = {currentUser}/>
    </div>
  )
}

export default page