interface HeadingProps{
    title: string,
    center?:boolean

}

import React from 'react'

const Heading = ({title, center}: HeadingProps) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <h2 className='font-bold text-2xl'>{title}</h2>
    </div>
  )
}

export default Heading
