import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBFUBQdZQkAidvZK0hBq9lsQ34d46EwBBc",
    authDomain: "jobkeeper-project.firebaseapp.com",
    projectId: "jobkeeper-project",
    storageBucket: "jobkeeper-project.firebasestorage.app",
    messagingSenderId: "363459196158",
    appId: "1:363459196158:web:7e4dbfef65d424f81ba1af"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);