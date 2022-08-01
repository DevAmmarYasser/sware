import React from 'react'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Landing from '../components/Landing'
import Pricing from '../components/Pricing '
import Subscribe from '../components/Subscribe'
import Testimonials from '../components/Testimonials'
import Video from '../components/Video'
export default function Home() {
  return (
    <>
        <Landing />
        <Features />
        <Video />
        <Testimonials />
        <Pricing />
        <Subscribe />
        <Footer/>
    </>
  )
}
