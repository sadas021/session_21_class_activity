// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMcg4TvxdpPCo4KAmAL7hILJp0B4lGLKY",
  authDomain: "session21-e8006.firebaseapp.com",
  projectId: "session21-e8006",
  storageBucket: "session21-e8006.firebasestorage.app",
  messagingSenderId: "1022967490723",
  appId: "1:1022967490723:web:47b3aee1b7fa0ab2ccf716",
  measurementId: "G-9Z0G2NZGX4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);