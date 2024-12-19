import React from 'react'

function SubLayout({children}:{children:React.ReactNode}) {
  return (
    <div 
     className="W-screen h-screen text-slate-100 bg-slate-950">{children}</div>
  )
}

export default SubLayout