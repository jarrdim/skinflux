import SignInForm from '@/components/form/SignInForm'
import React from 'react'
import { getCurrectUser } from '@/actions/getCurrentUser'


const page = async () => {
  const currentUser = await getCurrectUser()
  return (
    <div className='w-full ' >
        <SignInForm currentUser = {currentUser} />
    </div>
  )
}

export default page