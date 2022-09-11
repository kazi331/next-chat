import React from 'react'
import userAvatar from '../assets/avatar.png'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className='navbar'>
      <h2>Live Chat</h2>
      <div className="user">
        {/* <img src={userAvatar} alt="" /> */}
        <Image src={userAvatar} width="25" height="25" />
        <h3>Sayem Khan</h3>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar