import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth, googleProvider, githubProvider, facebookProvider } from '../config/firebase';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 Hours in ms

    useEffect(() => {
        if (!auth) {
            setLoading(false);
            return;
        }

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);

            if (currentUser) {
                // Check session validity logic
                const loginTime = localStorage.getItem('auth_login_timestamp');
                if (loginTime && (Date.now() - parseInt(loginTime) > SESSION_DURATION)) {
                    logout();
                    alert("Session expired. Please log in again.");
                } else if (!loginTime) {
                    // Set timestamp if missing (e.g. existing session)
                    localStorage.setItem('auth_login_timestamp', Date.now().toString());
                }
            }
        });
        return unsubscribe;
    }, []);

    // Periodic Check for Session Timeout (every 10 minutes)
    useEffect(() => {
        const interval = setInterval(() => {
            const loginTime = localStorage.getItem('auth_login_timestamp');
            if (user && loginTime && (Date.now() - parseInt(loginTime) > SESSION_DURATION)) {
                logout();
                alert("Session expired. Please log in again.");
            }
        }, 10 * 60 * 1000);

        return () => clearInterval(interval);
    }, [user]);

    const handleLogin = async (provider) => {
        if (!auth) {
            alert("Feedback System is currently disabled (Missing Configuration).");
            return;
        }
        try {
            await signInWithPopup(auth, provider);
            localStorage.setItem('auth_login_timestamp', Date.now().toString());
        } catch (error) {
            console.error("Login Failed:", error);
            if (error.code === 'auth/configuration-not-found') {
                alert("Login Failed: Authentication is not enabled in the Firebase Console.\n\nPlease go to Firebase Console > Authentication > Sign-in method and enable the provider.");
            } else {
                alert(`Login Failed: ${error.message} (Code: ${error.code})`);
            }
        }
    };

    const loginWithGoogle = () => handleLogin(googleProvider);
    const loginWithGithub = () => handleLogin(githubProvider);
    const loginWithFacebook = () => handleLogin(facebookProvider);
    const logout = () => {
        if (auth) signOut(auth);
        localStorage.removeItem('auth_login_timestamp');
    };

    const value = {
        user,
        loading,
        loginWithGoogle,
        loginWithGithub,
        loginWithFacebook,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
