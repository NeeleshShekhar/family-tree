// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAmGZT8CMrXHt8LkmTw2i3nma6ip_T4cZo",
    authDomain: "family-tree-bc606.firebaseapp.com",
    projectId: "family-tree-bc606",
    storageBucket: "family-tree-bc606.appspot.com",
    messagingSenderId: "745461335237",
    appId: "1:745461335237:web:3424c694452cab12aa1cac",
    measurementId: "G-95PTGCXN7N"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
