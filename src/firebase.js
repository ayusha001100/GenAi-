
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAg73L-MG55XkWAA3SLB6zl0sY9-MnYG7A",
    authDomain: "lisa-new-lms-tp.firebaseapp.com",
    projectId: "lisa-new-lms-tp",
    storageBucket: "lisa-new-lms-tp.firebasestorage.app",
    messagingSenderId: "994448187004",
    appId: "1:994448187004:web:7511808a4fb65b865273f9",
    measurementId: "G-5YVRRVNZDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export default app;
