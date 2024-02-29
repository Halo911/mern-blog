// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-blog-2cd19.firebaseapp.com',
  projectId: 'mern-blog-2cd19',
  storageBucket: 'mern-blog-2cd19.appspot.com',
  messagingSenderId: '183639277363',
  appId: '1:183639277363:web:0b64667f1734d1b74c8846',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
