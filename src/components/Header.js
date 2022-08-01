import React from 'react'
import {Link} from 'react-router-dom'
function show() {
  let nav = document.getElementById('nav');

  if (nav.classList.contains('opacity-0')) {
    nav.classList.remove('opacity-0')
    nav.classList.remove('translate-x-[-500px]')
  }else{
    nav.classList.add('opacity-0')
    nav.classList.add('translate-x-[-500px]')
  }
}
export default function Header() {
  return (
    <header className='w-full absolute top-0 left-0 h-[80px]'>
      <div className="container flex items-center justify-between h-full">
        <img src="https://landing.zytheme.com/sware/assets/images/logo/logo-light.png" alt="Logo" className="logo" />
        <nav id='nav' className='transition-all z-50 duration-300 bg-white shadow-sm translate-x-[-500px] opacity-0 lg:opacity-100 lg:translate-x-0 p-4 fixed top-0 left-0 h-[100vh] w-[75%] lg:w-fit lg:h-fit lg:p-0 lg:relative lg:shadow-none lg:bg-transparent '>
          <ul className="links text-myBlack lg:text-white flex gap-x-10 gap-y-5 flex-col items-start justify-start lg:flex-row lg-gap-y-0 lg:items-center lg:justify-center">
            <li><Link to="/" className='hover:text-Blue'>Home</Link></li>
            <li><a href="" className='hover:text-Blue'>Feature</a></li>
            <li><a href="" className='hover:text-Blue'>Video</a></li>
            <li><a href="" className='hover:text-Blue'>Testimonials</a></li>
            <li><a href="" className='hover:text-Blue'>Pricing</a></li>
            <li><a href="" className='hover:text-Blue'>Subscribe</a></li>
          </ul>
        </nav>
        <div className="toggle lg:hidden w-[50px] flex flex-col items-end gap-1 cursor-pointer" onClick={show}>
          <span className='h-[3px] rounded-lg w-8 bg-white'></span>
          <span className='h-[3px] rounded-lg w-8 bg-white'></span>
          <span className='h-[3px] rounded-lg w-5 bg-white hover:w-8 transition-all duration-300 ease-in-out'></span>
        </div>
      </div>
    </header>
  )
}
