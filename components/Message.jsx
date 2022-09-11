import Image from 'next/image'
import avatar from '../assets/avatar.png'
const Message = () => {
  return (
    <div className='message'>
      {/* <img src={avatar} alt="avatar" /> */}
      <Image src={avatar} width="25" height="25" />
      <div>
        <h2>Tylor</h2>
        <p>Okay Thank you!!</p>
      </div>
    </div>
  )
}

export default Message