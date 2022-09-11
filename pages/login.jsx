import React from 'react';
import Link from 'next/link'

const Login = () => {
    const login = (e) => {
        e.preventDefault();
       const email = e.target.email.value;
       const password = e.target.password.value;
       const user = { email, password}
       console.log(user)
    }
    return (
        <div className="container">
            <form onSubmit={login}>
                <div className='header'>
                    <h1 className='logo'>Live Chat</h1>
                    <span className='title'>Login</span>
                </div>
                <input name="email" type="email" placeholder='Email'  required/>
                <input name="password" type="password" placeholder='password'  required/>
                <button>Login</button>
                <p>Don&apos;t Have an account? <Link href="/register">Register</Link> </p>
            </form>
        </div>
    );
};

export default Login;