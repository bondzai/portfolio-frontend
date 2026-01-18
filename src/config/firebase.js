import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

let app = null;
let auth = null;
let googleProvider = null;
let githubProvider = null;
let facebookProvider = null;

try {
    // Check if critical config exists to avoid immediate crash on init
    if (firebaseConfig.apiKey && firebaseConfig.authDomain) {
        app = initializeApp(firebaseConfig);
        auth = getAuth(app);
        googleProvider = new GoogleAuthProvider();
        githubProvider = new GithubAuthProvider();
        facebookProvider = new FacebookAuthProvider();
    } else {
        console.warn("Firebase Config missing. Feedback system will be disabled.");
    }
} catch (error) {
    console.error("Firebase Initialization Failed:", error);
}

export { auth, googleProvider, githubProvider, facebookProvider };
