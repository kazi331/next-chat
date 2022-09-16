import Image from 'next/image'
import go from '../assets/svgs/google.svg'
import go2 from '../assets/svgs/google-white.svg'
import gt from '../assets/svgs/github.svg'
const SocialLogin = () => {
    return (
        <div className='social'>
            <p>Or, Login with Social</p>
            <div className="btns">
                <button type='button' className="social-btn"> <Image src={go2} alt="google" /> google</button>
                <button type='button' className="social-btn"> <Image src={gt} alt="github" /> github</button>
            </div>
        </div>
    );
};

export default SocialLogin;