import Container from '@/components/Container'
import React from 'react'
import OrdersClient from './OrderClient'
import { getCurrectUser } from '@/actions/getCurrentUser'
import getOrderByUserId from '@/actions/getOrderByUserId'
import Heading from '@/components/Heading'

const Orders = async () => {

    const currentUser = await getCurrectUser()

    if (!currentUser) {
        return <div className="text-center text-red-500 mt-8">ACCESS DENIED</div>;
      }


      const orders = await getOrderByUserId(currentUser.id)

      if (!orders) {
        return <div className="text-center text-red-500 mt-8">NO ORDERS YET</div>;
      }


  return (
    <div className='mt-8'>
     <Container>
        <Heading title='MY ORDERS'/>
        <OrdersClient orders={orders}/>
     </Container>
    </div>
  )
}

export default Orders
