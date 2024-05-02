

const firebaseConfig = {
	apiKey: "AIzaSyArAosbnSgSQtAENBVgvvY0fnCrU5vk54s",
	authDomain: "fir-aut-5b4e8.firebaseapp.com",
	projectId: "fir-aut-5b4e8",
	storageBucket: "fir-aut-5b4e8.appspot.com",
	messagingSenderId: "980603892053",
	appId: "1:980603892053:web:822f7660fc633a2ce03fdc",
	measurementId: "G-7PEQHRQF21"
  };
  firebase.initializeApp(firebaseConfig);
// Verificar si el documento existe antes de intentar actualizarlo
storyRef.get()
.then((doc) => {
if (doc.exists) {
    // El documento existe, entonces podemos proceder a actualizar el campo 'clicks'
    storyRef.update({ clicks: increment })
        .then(() => {
            console.log('Contador incrementado en Firestore');
        })
        .catch((error) => {
            console.error('Error al incrementar el contador:', error);
        });
} else {
    // El documento no existe, puedes crearlo si lo deseas
    console.log('El documento "clicks" no existe en Firestore');
}
})
.catch((error) => {
console.error('Error al obtener el documento "clicks":', error);
});
//Función para incrementar el contador en Firestore
function actualizarContador2(uid, documento) {
    const db = firebase.firestore();
    const increment = firebase.firestore.FieldValue.increment(1);
    const decrement = firebase.firestore.FieldValue.increment(-1);

    // Referencia al documento del usuario en Firestore
    const userRef = db.collection('usuarios-likes').doc(uid);

    // Referencia a la colección de contador dentro del documento del usuario
    const contadorRef = userRef.collection('contador');

    // Referencia al documento en la colección de contador
    const contadorDocRef = contadorRef.doc(documento);

    // Obtener el usuario actualmente autenticado
    const user = firebase.auth().currentUser;

    // Verificar si hay un usuario autenticado
    if (user) {
        // Obtener el ID único del usuario
        const userID = user.uid;
        console.log('ID de usuario:', userID);
    } else {
        console.log('No hay usuario autenticado');
        return; // Salir de la función si no hay usuario autenticado
    }

    contadorDocRef.get()
        .then((docSnapshot) => {
            // Verificar si el documento ya existe en la colección de contador
            if (!docSnapshot.exists) {
                // El documento no existe, así que lo creamos junto con la colección
                contadorRef.doc(documento).set({ count: 1 })
                    .then(() => {
                        console.log('Documento y colección de contador creados para el usuario:', documento);
                    })
                    .catch((error) => {
                        console.error('Error al crear el documento y la colección de contador:', error);
                    });
            } else {
                // El documento ya existe, podemos proceder a actualizar el contador
                contadorDocRef.update({ count: increment })
                    .then(() => {
                        console.log('Contador incrementado en Firestore');
                    })
                    .catch((error) => {
                        console.error('Error al incrementar el contador:', error);
                    });
            }
        })
        .catch((error) => {
            console.error('Error al obtener el documento de contador:', error);
        });
}
function obtenerUserID() {
    // Obtener el usuario actualmente autenticado
    const user = firebase.auth().currentUser;

    // Verificar si hay un usuario autenticado
    if (user) {
        // Devolver el ID único del usuario
        return user.uid;
    } else {
        // Si no hay usuario autenticado, devolver null o realizar alguna otra acción apropiada
        return null;
    }
}

// Utilizar obtenerUserID() y manejar el ID de usuario
const userID = obtenerUserID();
if (userID) {
    console.log("ID de usuario:", userID);
    // Llamar a otras funciones que requieran el ID de usuario
} else {
    console.log("No hay usuario autenticado");
    // Realizar alguna acción apropiada si no hay usuario autenticado
}

// Llamada a la función para actualizar el contador
const documento = 'contadorUsuario'; // Nombre del documento para el contador
actualizarContador2(userID, documento);


// function incrementarContadorYCrearColeccion(userID, documento) {
//     const db = firebase.firestore();

//     // Referencia al documento del usuario en Firestore
//     const userRef = db.collection('usuarios').doc(userID);

//     // Referencia a la colección de contador dentro del documento del usuario
//     const contadorRef = userRef.collection('contador');

//     // Referencia al documento en la colección de contador
//     const contadorDocRef = contadorRef.doc(documento);

//     // Incrementa el contador y crea la colección si no existe
//     contadorDocRef.get()
//         .then((docSnapshot) => {
//             // Verificar si el documento ya existe en la colección de contador
//             if (!docSnapshot.exists) {
//                 // El documento no existe, así que lo creamos junto con la colección
//                 contadorRef.add({
//                     count: 1
//                 })
//                 .then(() => {
//                     console.log('Documento y colección de contador creados para el usuario:', userID);
//                     // Luego, puedes agregar el código para incrementar el contador
//                     actualizarContador(documento);
//                 })
//                 .catch((error) => {
//                     console.error('Error al crear el documento y la colección de contador:', error);
//                 });
//             } else {
//                 // El documento ya existe, puedes proceder a incrementar el contador
//                 // Utiliza la referencia del documento de contador existente y el código para incrementar el contador.
//                 actualizarContador(documento);
//             }
//         })
//         .catch((error) => {
//             console.error('Error al obtener el documento de contador:', error);
//         });
// }
// const userID = firebase.auth().currentUser;

// // Verificar si hay un usuario autenticado
// if (userID) {
//     // Obtener el ID único del usuario
//     const userID = user.uid;
//     console.log('ID de usuario:', userID);
// } else {
//     console.log('No hay usuario autenticado');
// }
// // Obtener el userID de alguna manera
// const userID = obtenerUserID();
// // Nombre del documento para el contador (puedes cambiarlo según tus necesidades)
// const documento = 'contador';

// // Llamada a la función para incrementar el contador y crear la colección si no existe
// incrementarContadorYCrearColeccion(userID, documento);