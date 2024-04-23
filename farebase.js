import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

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
const auth = getAuth();

export class ManageAccount {
  register(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((_) => {
        window.location.href = "paginainiciodesesion.html";
        // Mostrar alerta de registro exitoso
        alert("Registro exitoso. Serás redirigido a la página de inicio de sesión.");
        
      })
      .catch((error) => {
        console.error(error.message);
            // Mostrar alerta de error de registro
            alert("Error al registrar: " + error.message);
      });
  }

  authenticate(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((_) => {
        window.location.href = "paginaprincipal.html";
        // Mostrar alerta de inicio de sesión exitoso
        alert("Has iniciado sesión correctamente. Serás redirigido a la página principal.");
        window.location.href = "paginaprincipal.html";
        
      })
      .catch((error) => {
        console.error(error.message);
                // Mostrar alerta de error de inicio de sesión
                
                
      });
  }

  signOut() {
    signOut(auth)
      .then((_) => {
        window.location.href = "paginainiciodesesion.html";
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
  
}
