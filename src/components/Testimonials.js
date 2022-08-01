import React from 'react'
import HeadContent from './HeadContent'

export default function Testimonials() {
    let Users = [{
        name: 'MARK SMITH',
        desc: "“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupida non proidentsunt in culpa qui officia deserunt.”",
        avatar: "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/sware2/75bf0c69-testimonials-1.png"
    },
    {
        name: 'JESSY ARTHUR',
        desc: "“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupida non proidentsunt in culpa qui officia deserunt.”",
        avatar: "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/sware2/fd805072-testimonials-2.png"
    },
    {
        name: 'MAYA JONSON',
        desc: "“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupida non proidentsunt in culpa qui officia deserunt.”",
        avatar: "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/sware2/81bdacdb-testimonials-3.png"
    },
    {
        name: 'STEVE MARTIN',
        desc: "“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupida non proidentsunt in culpa qui officia deserunt.”",
        avatar: "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/sware2/a22c9bae-testimonials-4.png"
    },
    ]
  return (
    <div className='Testimonials w-full relative py-12 bg-bgLight'>
        <div className="container w-full flex flex-col items-center justify-start gap-10">
            <HeadContent h2="What users say ?" p="Lorem ipsum dolor amet, consectetur adipisice elitesede eiusmod tempor incidide labe"/>
            <div className="cards grid lg:grid-cols-2 grid-cols-1 gap-5">
                {
                    Users.map(ele => {
                        return (
                            <div className="card p-10 flex lg:flex-row flex-col justify-start items-start gap-10 border-light/20 border-[1px] rounded-md">
                                <img src={ele.avatar} alt={ele.name} />
                                <div className="content flex flex-col gap-5">
                                    <p className='text-light text-lg w-full'>{ele.desc}</p>
                                    <b>{ele.name}</b>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
