import React from 'react'

function SubLayout({children}:{children:React.ReactNode}) {
  return (
    <div className="W-screen h-screen">{children}</div>
  )
}

export default SubLayout