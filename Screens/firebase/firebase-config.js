// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBJ0JP6ycts-gvF8siUEJbpe-X7x68OaBM",
  authDomain: "carpoool-3261a.firebaseapp.com",
  projectId: "carpoool-3261a",
  storageBucket: "carpoool-3261a.appspot.com",
  messagingSenderId: "696626332084",
  appId: "1:696626332084:web:c1616a5e16e838a6a4b2e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);
