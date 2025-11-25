// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth ,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV7Ttil_1frm_s3BzZzqugftUvppHH4J8",
  authDomain: "edu-platform-2ee51.firebaseapp.com",
  projectId: "edu-platform-2ee51",
  storageBucket: "edu-platform-2ee51.firebasestorage.app",
  messagingSenderId: "915037565164",
  appId: "1:915037565164:web:a5d8db4e6fad70339175c9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {app, auth, provider}