import React from 'react'
import Button from './Button'
import {Link} from 'react-router-dom'
import HeadContent from './HeadContent'

export default function Pricing () {
    let prices = [{
        type: "Starter",
        price: "Free",
        date: "per month",
        features: ["Up to 4 users monthly","Unlimited updates","none",'none'],
        class: "",
    },
    {
        type: "PREMIUM",
        price: "$49",
        date: "per month",
        features: ["Up to 10 users monthly","Unlimited updates","A/B Testing","Email Integration"],
        class: "bg-bgLight",
    },
    {
        type: "COMPANY",
        price: "$59",
        date: "per month",
        features: ["Up to 30 users monthly","Unlimited updates","A/B Testing","Email Integration"],
        class: "",
    },
    ]
  return (
    <div className='Pricing w-full relative py-16'>
        <div className="container w-full flex flex-col justify-start items-center gap-10">
            <HeadContent h2="Pricing plans" p="Lorem ipsum dolor amet, consectetur adipisice elitesede eiusmod tempor incidide labe" />
            <div className="cards w-full  grid-cols-1 grid lg:grid-cols-3 items-center justify-center">
                {
                    prices.map((ele) => {
                        return (
                            <div className={`${ele.class} p-6 flex flex-col justify-center items-center gap-5 text-center h-full`}>
                            <b>{ele.type}</b>
                            <h2 className='font-bold text-myBlack text-5xl'>{ele.price}</h2>
                            <p className='text-sm text-light'>{ele.date}</p>
                            <ul className='gap-4 flex flex-col'>
                                {
                                    ele.features.map((e) => {
                                        return (
                                            <li>{e}</li>
                                        )
                                    })
                                }
                            </ul>
                            <Button to="Price" content="Get Start" class="px-10 py-4 text-white bg-Blue rounded-full"/>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
