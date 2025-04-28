// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCusL1WMQYTQlQSByTErlHMWP2E0lH_aTE",
  authDomain: "prepwise-47f16.firebaseapp.com",
  projectId: "prepwise-47f16",
  storageBucket: "prepwise-47f16.firebasestorage.app",
  messagingSenderId: "243141090917",
  appId: "1:243141090917:web:70a1e15d3de6ebd265f08c",
  measurementId: "G-E6ZMZGZCZL"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db =  getFirestore(app);