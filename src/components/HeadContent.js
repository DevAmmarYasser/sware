import React from 'react'

export default function HeadContent(props) {
  return (
    <>
        <h2 className='text-center text-4xl'>{props.h2}</h2>
        <p className='text-center text-lg w-[100%] lg:w-[40%] relative mb-12 text-light pb-6 after:content-[" "] after:absolute after:bottom-0 after:left-[45%] after:bg-Blue after:w-[10%] after:rounded after:h-[2px]'>
            {props.p}
        </p>
    </>
  )
}
