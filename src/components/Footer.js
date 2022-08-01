import React from 'react'

export default function Footer() {
    let date = new Date()
  return (
    <footer className='bg-myBlack py-6'>
        <div className="container">
            <p className='text-white text-center'>2022 / {date.getFullYear()} © Ahmed Hamdy. All rights reserved.</p>
        </div>
    </footer>
  )
}
