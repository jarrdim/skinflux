import React, { ReactNode } from 'react'

const Wrap = ({children} : {children : ReactNode}) => {
  return (

    <div className='min-h-fit h-full flex items-center justify-center pb-12 pt-24 
    '>
        <div className='w-full flex flex-col
        rounded-md p-4 md:p-8 bg-gray-300
         gap-2 items-center shadow-xl shadow-slate-200 max-w-[650px]'>
            {children}
        </div>
      
    </div>
  )
}

export default Wrap
