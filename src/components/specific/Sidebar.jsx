import React from 'react'
import Logo from '../common/Logo'
import MainSidebar from '../common/MainNavbar'

function Sidebar() {
  return (
    <>
      <div className="h-[20%]  flex justify-center items-center bg-base-100">
        <Logo width="100px" height="100px"/>
      </div>
      <div className='bg-base-100  h-[80%]'>
        <MainSidebar/>
      </div>
    </>
  )
}

export default Sidebar
