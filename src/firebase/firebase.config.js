// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgKUIJY2LFJ0SKIPd297xgg7MAm6d46XI",
    authDomain: "blue-depths-auth.firebaseapp.com",
    projectId: "blue-depths-auth",
    storageBucket: "blue-depths-auth.firebasestorage.app",
    messagingSenderId: "949082116705",
    appId: "1:949082116705:web:0618e78113455d4d33d020"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;