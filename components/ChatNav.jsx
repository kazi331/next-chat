import Image from 'next/image'
import add from '../assets/add.png'
import cam from '../assets/cam.png'
import more from '../assets/more.png'
const ChatNav = () => {
  return (
    <div className='navbar'>
    <h2>Tylor</h2>
    <div className='btns'>
     <button><Image src={cam} alt="image" width="25" height="25" /></button>
     <button><Image src={add} alt="image" width="25" height="25" /></button>
     <button><Image src={more} alt="image" width="25" height="25" /></button>
    </div>
  </div>
  )
}

export default ChatNav