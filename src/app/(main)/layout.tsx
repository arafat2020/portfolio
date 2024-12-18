"use client"
import React from 'react'
import FloatingNav from './_components/FloatingNav'
import { AnimatePresence, motion } from 'framer-motion'
import Transition from './_components/Transition'
import { usePathname } from 'next/navigation'

function MainLayout({ children }: { children: React.ReactNode }) {
  const path =  usePathname()
  return (
    <AnimatePresence mode='wait' key={path}>
      <motion.div className='w-screen h-screen relative'>
        <Transition/>
        <FloatingNav />
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default MainLayout