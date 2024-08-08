import Container from "@/components/Container";
import React from 'react'
import CartFront from "./CartFront";
import { getCurrectUser } from "@/actions/getCurrentUser";


const Cart = async () => {
  const currentUser = await getCurrectUser()
  return (
    <div className='mt-8 '>
      <Container>
    <CartFront currentUser = {currentUser}/>
      </Container>
    </div>
  )
}

export default Cart
