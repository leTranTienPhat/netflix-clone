// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8vaGyluDPHV5c6TodrhcvVpa1uebwsUg",
  authDomain: "netflix-clone-ed1a5.firebaseapp.com",
  projectId: "netflix-clone-ed1a5",
  storageBucket: "netflix-clone-ed1a5.appspot.com",
  messagingSenderId: "54204240927",
  appId: "1:54204240927:web:d784eea4c9d2a634aab12a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const auth = getAuth()

export default app

export { db, auth }