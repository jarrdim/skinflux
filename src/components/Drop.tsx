import React from 'react'

interface Props{
    onClick: () => void
}
const Drop = ({onClick}:Props) => {
  return (
    <div onClick={onClick} className='z-20 bg-slate-200 opacity-50 w-full h-screen fixed top-0 left-0'>
      
    </div>
  )
}

export default Drop
