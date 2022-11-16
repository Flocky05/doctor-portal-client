import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContex = createContext();
const auth = getAuth(app)

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {

        return signOut(auth)
    }

    const authInfo = {
        createUser, signIn, logOut
    }
    return (
        <AuthContex.Provider value={authInfo}>
            {
                children
            }
        </AuthContex.Provider>
    );
};

export default AuthProvider;