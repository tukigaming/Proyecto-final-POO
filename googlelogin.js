import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArAosbnSgSQtAENBVgvvY0fnCrU5vk54s",
  authDomain: "fir-aut-5b4e8.firebaseapp.com",
  projectId: "fir-aut-5b4e8",
  storageBucket: "fir-aut-5b4e8.appspot.com",
  messagingSenderId: "980603892053",
  appId: "1:980603892053:web:822f7660fc633a2ce03fdc",
  measurementId: "G-7PEQHRQF21"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();


const googlelogin = document.getElementById("google-btn")
googlelogin.addEventListener("click", function () {

 signInWithPopup(auth, provider)
  .then((result) => {
   
   const credential = GoogleAuthProvider.credentialFromResult(result);
   const user = result.user;
   console.log(user);
   window.location.href = "paginaprincipal.html";
  }).catch((error) => {
  
   const errorCode = error.code;
   const errorMessage = error.message;
   
   
  });

})