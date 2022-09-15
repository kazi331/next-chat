import Image from 'next/image';
import attach from '../assets/attach.png';
import img from '../assets/img.png';

const InputBox = () => {
    return (
        <div className='inputBox'>
            {/* <input type="text" placeholder='type something...' /> */}
            <textarea name="" id="" cols="30" rows="2" placeholder='type something...'></textarea>
            <div className="btns">
                <input type="file" id="file" style={{ display: 'none' }} accept="image/*" />
                <label htmlFor="file">
                    <Image src={attach} alt="image" width="25" height="25" />
                </label>
                <input type="file" id="img" style={{ display: 'none' }} accept="image/jpeg, image/png, image/heic" />
                <label htmlFor="img">
                    <Image src={img} alt="image" width="25" height="25" />
                    </label>
            </div>
        </div>
    );
};

export default InputBox;