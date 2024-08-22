import React from 'react'

function Logo({width,height}) {
  return (
    <div className=''>
      <img 
      style={{
        width: `${width}`,
        height: `${height}`,
      }}
        className=' rounded-full'
        src="https://img.freepik.com/premium-vector/abstract-bank-logo-design-template-corporate-identity-design-element-business-sign_995817-288.jpg" alt="logo" />
    </div>
  )
}
export default Logo
