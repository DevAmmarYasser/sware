import React from 'react'

export default function Features() {
  return (
    <div className='features w-full relative py-[50px] lg:py-[100px]'>
        <div className="container w-full flex flex-col justify-start items-center ">
            <h2 className='text-4xl py-6'>Top features</h2>
            <p className='after:content-[" "] after:absolute after:bottom-0 after:left-[45%] after:bg-Blue after:w-[10%] after:rounded after:h-[2px]
            relative pb-6 pt-2 text-light text-lg w-full lg:w-[50%] text-center'>Lorem ipsum dolor amet, consectetur adipisice elite sede eiusmod tempor incidide labe</p>
            <div className="columns grid lg:grid-flow-col grid-flow-row auto-rows-auto lg:auto-cols-[350px] gap-10 text-light items-center py-[75px] text-center">
                <div className="content flex flex-col items-center gap-5">
                    <img src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/sware2/3641b033-features-icon-1.png" alt="screen-icon" />
                    <h3 className='text-[20px] font-bold text-myBlack'>Register to get start</h3>
                    <p>Sed duis odio sit amet ibh vulputate cusus amet mauris. morbi viele accumsan ipsum velit nam nec tellus odio.</p>
                </div>
                <div className="content flex flex-col items-center gap-5">
                    <img src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/sware2/fd93c63e-features-icon-2.png" alt="State-icon" />
                    <h3 className='text-[20px] font-bold text-myBlack' >Analysis your data</h3>
                    <p>Sed duis odio sit amet ibh vulputate cusus amet mauris. morbi viele accumsan ipsum velit nam nec tellus odio.</p>
                </div>
                <div className="content flex flex-col items-center gap-5">
                    <img src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/sware2/fdef22ef-features-icon-3.png" alt="data" />
                    <h3 className='text-[20px] font-bold text-myBlack' >Use the results</h3>
                    <p>Sed duis odio sit amet ibh vulputate cusus amet mauris. morbi viele accumsan ipsum velit nam nec tellus odio.</p>
                </div>
            </div>
        </div>
        <div className="content-left py-[50px] w-full bg-bgLight">
            <div className="container flex flex-col lg:flex-row items-center py-[50px] justify-between gap-y-16 lg:gap-x-16">
                <div className="typography">
                    <img src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/sware2/4a16a362-benefits-icon-1.png" alt="benefits icon" />
                    <h2 className='text-4xl text-myBlack py-6'>Works on all platforms</h2>
                    <p className='text-light text-lg w-[100%]'>
                        Duis aute irure dolor in reprehenderit in voluptate esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident,sunt in culpa qui official.
                    </p>
                </div>
                <img src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/sware2/fea61c44-benefits-mockup-1_0in0b80im0b7000000.png" alt="Responsive" />
            </div>
        </div>
        <div className="content-left py-[50px] w-full bg-bgLight">
            <div className="container flex flex-col lg:flex-row-reverse  items-center py-[50px] justify-between gap-y-16 lg:gap-x-16">
                <div className="typography">
                    <img src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/sware2/90c45ad7-benefits-icon-2.png" alt="pointer icon" />
                    <h2 className='text-4xl text-myBlack py-6'>Works on all platforms</h2>
                    <p className='text-light text-lg w-[100%]'>
                        Duis aute irure dolor in reprehenderit in voluptate esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident,sunt in culpa qui official.
                    </p>
                </div>
                <img src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/sware2/e8bd9636-benefits-mockup-2.png" alt="Tap" />
            </div>
        </div>

    </div>
  )
}
