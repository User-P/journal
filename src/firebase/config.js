
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyACHUxIQ3tS8B-581cS8Es9BvGn1CwBUxU",
    authDomain: "react-journal-1d17e.firebaseapp.com",
    projectId: "react-journal-1d17e",
    storageBucket: "react-journal-1d17e.appspot.com",
    messagingSenderId: "67802728537",
    appId: "1:67802728537:web:d4e7f04e175d358838c948"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaeDB = getFirestore(FirebaseApp);