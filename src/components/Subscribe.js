import React from 'react'
import {Link} from 'react-router-dom'
import Button from './Button'
export default function Subscribe() {
  return (
    <div className='subscribe w-full relative py-[100px] bg-bgLight'>
        <div className="container w-full flex flex-col items-center justify-start gap-6">
            <h2 className='text-myBlack text-4xl'>Subscribe to get updates</h2>
            <p className='text-light pb-6'>Lorem ipsum dolor amet, consectetur adipisice elitesede eiusmod tempor incidide labe</p>
            <form action="" className='flex flex-row relative h-12 w-[50%]'>
                <input type="email" placeholder='Your Email' className='focus:border-light/20 focus:outline-none focus:border-[1px] w-full px-6 border-light/20 border-[1px] rounded-full'/>
                <Button to="/subscribe" content="Subscribe" class="bg-Blue px-10 py-4 text-sm uppercase absolute top-0 right-0 text-white rounded-full "/>
            </form>
        </div>
    </div>
  )
}
