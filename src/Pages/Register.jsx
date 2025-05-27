import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
    const { createUser } = use(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const { email, password } = Object.fromEntries(formData.entries())
        console.log(email, password);
        createUser(email, password)?.then(user => console.log(user))
    }
    return (
        <div className='w-[400px] mx-auto my-10'>
            <form onSubmit={handleRegister} className="fieldset">
                <label className="label">Name</label>
                <input type="text" className="input w-full" name='name' placeholder="Email" />
                <label className="label">PhotoURL</label>
                <input type="text" className="input w-full" name='photo' placeholder="Email" />
                <label className="label">Email</label>
                <input type="email" className="input w-full" name='email' placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" className="input w-full" name='password' placeholder="Password" />
                <button type='submit' className="btn btn-neutral mt-4">Register</button>
            </form>
        </div>
    );
};

export default Register;