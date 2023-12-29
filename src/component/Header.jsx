import React from 'react'
import logo from '../../src/assets/Images/logo-d-plus.svg'

function Header() {
  return (
    <>
        <div>
            <img src={logo} className='w-[80px] object-cover' alt="" />
        </div>
    </>
  )
}

export default Header