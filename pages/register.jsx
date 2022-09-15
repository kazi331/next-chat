import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
// import '../phoneNumber.css'
import addAvatar from '../assets/addAvatar.png';
import SocialLogin from '../components/SocialLogin';
console.log(addAvatar)
const Register = () => {
    const [avatarTitle, setAvatarTitle] = useState(null)
    const [avatar, setAvatar] = useState(null)
    const [phone, setPhone] = useState(null)
    console.log(phone)
    const register = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const avatar = e.target.avatar.files[0];
        const user = { name, email, password, avatar, phone }
        console.log(user)
    }
    return (
        <div className="container">
            <div className="form">
                <form onSubmit={register}>
                    <div className='header'>
                        <h1 className='logo'>Live Chat</h1>
                        <span className='title'>Register</span>
                    </div>
                    <input name="name" type="text" placeholder='Display Name' required />
                    <input name="email" type="email" placeholder='Email' autoComplete="email" required />
                    <input name="password" type="password" placeholder='password' autoComplete="current-password" required />
                    <PhoneInput
                        containerClass="phoneNumberContainer"
                        inputClass="phoneInput"
                        dropdownClass="phoneDropdown"
                        buttonClass="phoneButton    "
                        country={'no'}
                        enableSearch={true}
                        onChange={phone => setPhone(phone)}
                    />
                    <input name="avatar" type="file" accept='image/*' id="avatar" required style={{ height: '0', padding: '0' }}
                        onChange={(e) => {
                            setAvatarTitle(e.target.files[0].name)
                            // console.log(e.target.files[0])
                            setAvatar(e.target.files[0].name)
                        }} />
                    <label className='pickAvatar' htmlFor="avatar">
                        {/* <img src={addAvatar} alt="avatar" /> */}
                        <Image src={addAvatar} alt="image" width="25" height="25" />
                        <span>{avatarTitle || "Choose Avatar"}</span>
                        {!avatar && <span className='warn'>required</span>}
                    </label>
                    <button type='submit'>Sign Up</button>
                </form>
                <SocialLogin />
                <p>Have an account? <Link href="/login">Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;