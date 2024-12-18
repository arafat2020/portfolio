"use client"
import React from 'react'
import FloatingNav from './_components/FloatingNav'
import {} from ''

function MainLayout({children}:{children:React.ReactNode}) {
  return (
    <div className='w-screen h-screen relative'>
      <FloatingNav/>
        {children}
    </div>
  )
}

export default MainLayout