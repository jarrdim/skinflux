'use client'
import React from 'react'
import Container from '../Container'
import AdminNavItem from './AdminNavItem'
import { MdDashboard, MdFormatListBulleted } from 'react-icons/md'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const AdminNav = () => {
    const pathName = usePathname();
  return (
    <div className='w-full shadow-sm border-b[1px] pt-2'>
        <Container>
            <div className='flex flex-row items-center justify-between md:justify-center
             gap-8 md:gap-12 overflow-x-auto flex-nowrap'>
                <Link href='/admin/manage-orders'>
                <AdminNavItem label='ManageOrders' icon={MdFormatListBulleted} selected= {pathName === "/admin/manage-orders"}/>
                </Link>

            </div>
        </Container>
      
    </div>
  )
}

export default AdminNav
