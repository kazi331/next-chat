import Image from 'next/image';
import avatar from '../assets/avatar.png';
const MessageBody = () => {
    return (
        <div className='messageBody'>
            <Image src={avatar} alt="image" width="25" height="25" />
            <div>
                <p>Hello, how are you</p>
            </div>
        </div>
    );
};

export default MessageBody;