// Obtener el usuario actualmente autenticado
const user = firebase.auth().currentUser;

// Verificar si el usuario está autenticado
if (user) {
    const db = firebase.firestore();
    const userEmail = user.email;

    // Definir la referencia al documento del usuario
    const userRef = db.collection('info.usuarios').doc(info);

    // Actualizar el número de clicks en el documento del usuario
    userRef.set({ email: userEmail, favoritos: numeroDeClicks }, { merge: true })

        .then(() => {
            console.log('Información del usuario actualizada en Firestore');
        })
        .catch((error) => {
            console.error('Error al actualizar la información del usuario:', error);
        });
} else {
    console.error('Usuario no autenticado.');
}
