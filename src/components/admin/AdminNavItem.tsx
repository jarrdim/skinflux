import React from 'react'
import { IconType } from 'react-icons/lib';

interface AdminProps{
    selected?: boolean;
    icon:IconType;
    label: string
}
const AdminNavItem = ({selected, icon: Icon, label}: AdminProps) => {
  return (
    <div className={`flex items-center justify-center text-center gap-1 p-2 border-b-2 hover:text-slate-800 transition cursor-pointer
  ${selected ? 'border-b-slate-800 text-slate-800' : 'border-transparent text-slate-500'}`}>
  <Icon size={20}/>
  <div className='font-medium text-sm  break-normal text-center'>{label}</div>
      
    </div>
  )
}

export default AdminNavItem
