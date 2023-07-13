import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCG9O3vdlH1TM7hMfXfmcHkAmdQEbVKego",
    authDomain: "chat-d6725.firebaseapp.com",
    projectId: "chat-d6725",
    storageBucket: "chat-d6725.appspot.com",
    messagingSenderId: "1035801135166",
    appId: "1:1035801135166:web:653301bef337795be1a96f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();