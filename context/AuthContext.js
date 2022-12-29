import {createContext, useContext, useEffect, useState} from 'react';
import {onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {auth} from '../config/firebaseApp';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName
                })
            } else {
                setUser(null)
            }
            setLoading(false);
        });
        return () => unsubscribe();
    },[]);
    const signUp = (email, password) => {
        console.log('SIGNING IN')
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = async () => {
        await signOut(auth);
    }
    return (
        <AuthContext.Provider value={{user, signIn, signUp, logOut}}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}
