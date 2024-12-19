"use client"
import React from 'react'
import Contact from '../../_components/Contact'
import StarsCanvas from '../../_components/canvas/Stars'

function ContactPage() {
  return (
    <div className='w-full h-full relative z-0'>
      <Contact/>
      <StarsCanvas/> 
    </div>
  )
}

export default ContactPage