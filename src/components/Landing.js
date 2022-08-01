import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import Header from './Header'
export default function Landing() {
  let [text,setText] = useState(0)
  let arrayText = ['With Sware', 'With Amazi UI','With Greate Landing','With Responsive Design']
  useEffect(() => {
    setTimeout(() => {
      setText(text + 1);
      if (text === --arrayText.length) {
        setText(0);
      }
    }, 5000);
  },[text])
  let navigate = useNavigate()
  useEffect(() => {
    if (navigate('/') === undefined) {
      setTimeout(() => {
        document.getElementById('mobile-image').classList.remove('opacity-0')
        document.getElementById('mobile-image').classList.remove('translate-y-[150px]')
      }, 750);
    }
  }, [navigate])

  return (
    <div className='Landing bg-myBlack w-full h-[135vh] lg:h-[100vh] text-white font-PT'>
      <Header />
    <div className="container h-[100%] flex flex-col justify-between items-center">
      <div className="Typography w-full flex flex-col justify-start items-center py-[100px] lg:py-[150px]">
        <h1 className='font-PT font-bold text-[26px] lg:text-4xl w-[100%] lg:w-[80%] text-center transition-all duration-300 overflow-hidden py-5'>Present Your Software <span className='text-Blue opacity-100 transition-all duration-300 ease-in-out'>{arrayText[text]}</span>.</h1>
        <p className='text-lg font-light mb-12 mt-4 text-center'>This should be used to tell a story app benefits & more</p>
        <Button to='/' content='Get Start' class="py-4 px-12 bg-Blue rounded-full uppercase text-xs hover:bg-Green transition-all duration-300 "/>
      </div>
      <img id='mobile-image' src="https://landing.zytheme.com/sware/assets/images/mockup/1.png" className='opacity-0 translate-y-[150px] transition-all duration-700' alt="Tab" />
      </div>
    </div>
  )
}
