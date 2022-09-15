
import Link from 'next/link';
import SocialLogin from '../components/SocialLogin';

const Login = () => {
    const login = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const user = { email, password }
        console.log(user)
    }
    return (
        <>
            <div className="container">
                <div className="form">
                    <form onSubmit={login}>
                        <div className='header'>
                            <h1 className='logo'>Live Chat</h1>
                            <span className='title'>Login</span>
                        </div>
                        <input name="email" type="email" placeholder='Email' required />
                        <input name="password" type="password" placeholder='password' required />
                        <button type='submit'>Login</button>
                    </form>
                    <SocialLogin />
                    <p>Don&apos;t Have an account? <Link href="/register">Register</Link> </p>
                </div>
            </div>
        </>
    );
};

export default Login;