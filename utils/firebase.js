// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFireStore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_APP_API_KEY,
  authDomain: process.env.NEXT_APP_AUTH_DOMAIN,
  projectId: process.env.NEXT_APP_PROJECT_ID,
  storageBucket: process.env.NEXT_APP_STORAGE,
  messagingSenderId: process.env.NEXT_APP_MESSAGE,
  appId: process.env.NEXT_APP_ID,
  measurementId: process.env.NEXT_APP_MEASURMENT 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFireStore(app)
