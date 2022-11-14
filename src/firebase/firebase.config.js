// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAN3EtlnoatNkY-tl3hVHfLbSGUQhRfB-c",
    authDomain: "doctors-portal-eb4d1.firebaseapp.com",
    projectId: "doctors-portal-eb4d1",
    storageBucket: "doctors-portal-eb4d1.appspot.com",
    messagingSenderId: "763300133271",
    appId: "1:763300133271:web:c5e584b88df4096c456cd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;