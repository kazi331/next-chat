import Image from 'next/image'
import attach from '../assets/attach.png'
import img from '../assets/img.png'

const InputBox = () => {
    return (
        <div className='inputBox'>
            <input type="text" placeholder='type something...' />
            <div className="btns">
                <button> <Image src={attach} width="25" height="25" /></button>
                <button> <Image src={img} width="25" height="25" /></button>
            </div>
        </div>
    );
};

export default InputBox;