import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const { signInUser } = use(AuthContext)


    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)

    }
    return (
        <div className='w-[400px] mx-auto my-10'>
            <form onSubmit={handleLogin} className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input w-full" name='email' placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" className="input w-full" name='password' placeholder="Password" />
                <div>
                    <a className="link link-hover">Forgot password?</a>
                </div>
                <button type='submit' className="btn btn-neutral mt-4">Login</button>
            </form>
        </div>
    );
};

export default Login;