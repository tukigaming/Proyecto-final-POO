document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("boton").addEventListener("click", async function (event) {
      const email = document.getElementById('email').value;
      const password = document.getElementById('Password').value;
  
      if (compararContraseñas()) {
        console.log('Contraseñas coinciden, procediendo con el registro...');
        try {
          const credenciales = await createUserWithEmailAndPassword (auth, email, password);
          console.log(credenciales);
          showMessage("¡Bienvenido, " + credenciales.user.email + "!");
          const uid = credenciales.user.uid;
  
          // Agregar el UID como identificador de documento en Firestore
          const nuevoDocRef = doc(firestore, 'usuarios', uid);
          const datos = {
            email: email,
          };
  
          await setDoc(nuevoDocRef, datos);
          console.log("Datos guardados correctamente:", nuevoDocRef.id);
          localStorage.setItem('userID', uid);
          showMessage("¡Bienvenido, " + credenciales.user.email + "!");
          window.location.href = '.html';
        } catch (error) {
          if (error.code === 'auth/email-already-in-use') {
            showMessage("El correo electrónico ya está en uso", "error")
          } else if (error.code === 'auth/invalid-email') {
            showMessage("Correo electrónico no válido", "error")
          }
        }
      }
    });
  });