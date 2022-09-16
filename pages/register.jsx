import { useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import addAvatar from '../assets/addAvatar.png';

const Register = () => {
    const [avatarTitle, setAvatarTitle] = useState(null)
    const [avatar, setAvatar] = useState(null)
    const [phone, setPhone] = useState(null)


    // handle register info using react 
    /*   const handleRegister = (e) => {
          e.preventDefault();
          let {uName, dName, email, password, avatar} = e.target;
          const userName = uName.value;
          const displayName = dName.value;
          const userEmail = email.value;
          const userPassword = password.value;
          const userAvatar = avatar.files[0];
          const user = { userName, displayName, userEmail, userPassword, userAvatar, phone }
          console.log(user)
      } */


    // handle user info using formik 
    const initialValues = {
        uName: '',
        dName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        avatar: ''
    }
    const { errors, values, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues,
        onSubmit: (values) => {
            values.phone = phone;
            values.avatar = avatar;
            console.log(values)
        },

    });
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(formik)

    // }

    return (
        <div className="container">
            <div className="form">
                <form onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmit()
                }} >
                    <div className='header'>
                        <h1 className='logo'>Live Chat</h1>
                        <span className='title'>Register</span>
                    </div>
                    <input name="uName" type="text" placeholder='username' required autoComplete='off'
                        value={values.uName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <input name="dName" type="text" placeholder='Display Name' required autoComplete="off"
                        value={values.dName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <input name="email" type="email" placeholder='Email' required autoComplete="off"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <input name="password" type="password" placeholder='password' required autoComplete="off"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <input name="confirmPassword" type="password" placeholder='confirm password' required autoComplete="off"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <PhoneInput
                        containerClass="phoneNumberContainer"
                        inputClass="phoneInput"
                        dropdownClass="phoneDropdown"
                        buttonClass="phoneButton    "
                        country={'no'}
                        enableSearch={true}
                        onChange={phone => setPhone(phone)}
                        // onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <input name="avatar" type="file" accept='image/*' id="avatar" required
                        style={{ height: 0, padding: 0, width: 0 }}
                        
                        onChange={(e) => {
                            setAvatarTitle(e.target.files[0].name)
                            // console.log(e.target.files[0])
                            setAvatar(e.target.files[0].name)
                        }}
                    />
                    <label className='pickAvatar' htmlFor="avatar">
                        {/* <img src={addAvatar} alt="avatar" /> */}
                        <Image src={addAvatar} alt="image" width="25" height="25" />
                        <span>{avatarTitle || "Choose Avatar"}</span>
                        {!avatar && <span className='warn'>required</span>}
                    </label>
                    <button type='submit'>Sign Up</button>
                </form>
                <p>Have an account? <Link href="/login">Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;