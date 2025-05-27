import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const ContextProvider = ({ children }) => {

    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }

    const user = 'hello'

    const userData = {
        createUser,
        user
    }
    return (
        <AuthContext value={userData}>
            {children}
        </AuthContext>
    );
};

export default ContextProvider;