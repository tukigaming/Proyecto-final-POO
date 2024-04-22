import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyArAosbnSgSQtAENBVgvvY0fnCrU5vk54s",
    authDomain: "fir-aut-5b4e8.firebaseapp.com",
    projectId: "fir-aut-5b4e8",
    storageBucket: "fir-aut-5b4e8.appspot.com",
    messagingSenderId: "980603892053",
    appId: "1:980603892053:web:822f7660fc633a2ce03fdc",
    measurementId: "G-7PEQHRQF21"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)