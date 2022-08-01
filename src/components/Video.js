import React from 'react'
import HeadContent from './HeadContent'

export default function Video() {

  return (
    <div className='Works py-[50px] hidden md:block'>
        <div className="container flex flex-col items-center justify-start gap-5">
            <HeadContent h2="How it works ?" p="Lorem ipsum dolor amet, consectetur adipisice elitesede eiusmod tempor incidide labe" />
            <div className="video relative after:bg-LightBlue after:w-full after:h-full after:top-0 after:left-0 after:content-[' ']">
                <img className='rounded-xl' src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/sware2/9efad0ea-video-1.png" alt="Desktop" />
                <a href="clkn/rel/a-2-lightbox.html" className='lg:w-[100px] w-[50px] flex items-center justify-center h-[50px] lg:h-[100px] absolute top-[15%] left-[30%] lg:top-[40%] lg:left-[45%] bg-Blue rounded-full'>
                    <span className='w-0 p-4 h-0 bg-white rotate-90' style={{"clipPath": "polygon(45% 15%, 0% 85%, 85% 85%)"}}></span>
                </a>
            </div>
        </div>
    </div>
  )
}
