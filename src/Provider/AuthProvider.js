import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';


export const AuthContext = createContext();
const auth = getAuth(app);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    
    const createUser = (email, password) =>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
            .then(() => {
                localStorage.removeItem('access-token'); 
                setLoading(false);
                
            })
            .catch(error => {
                console.error("Logout error:", error);
                setLoading(false);
            });
    };
    
//    const logOut = ()=>{
//      setLoading(true);
//      return signOut(auth);
//    }

    // useEffect(()=>{
    //     const unsubscribe = onAuthStateChanged(auth, currentUser =>{
    //         setUser(currentUser);
    //         console.log('current User', currentUser);
    //         if(currentUser?.email){
    //             const user = {email: currentUser?.email};
    //             axios.post('http://localhost:5000/jwt', user,{withCredentials: true})
            
    //         .then(res =>{
    //             console.log('jwt token user post axios from authprovider', res.data);
    //         })
    //         }
    //         else{
    //             axios.post('http://localhost:5000/logout', {},{withCredentials: true})
            
    //             .then(res =>{
    //                 console.log('jwt token user post axios from authprovider logout', res.data);
    //             })
    //         }
            
    //         setLoading(false);
    //     });
    //     return ()=>{
    //         return unsubscribe();
    //     }
    // },[]);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current User', currentUser);
    
            if (currentUser?.email) {
                const user = { email: currentUser.email };
                axios.post('http://localhost:5000/jwt', user)
                    .then(res => {
                        const token = res.data.token;
                        console.log('JWT token received from server:', token);
                        localStorage.setItem('access-token', token);
                    })
                    .catch(error => console.error("JWT request error:", error));
            } else {
                axios.post('http://localhost:5000/logout', {}, { withCredentials: true })
                    .then(res => {
                        console.log('Logged out from backend:', res.data);
                    })
                    .catch(error => console.error("Logout request error:", error));
            }
    
            setLoading(false);
        });
    
        return unsubscribe; // Directly return the unsubscribe function
    }, []);
    

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;