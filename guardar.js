// Función para guardar el número de clics en Firestore con un ID único
function guardar() {
    const db = firebase.firestore();
    const click = parseInt(document.getElementById("botonlike").value); // Obtener el valor actual de clics y convertirlo a entero
    const nuevoClickRef = db.collection("click").doc(); // Generar un ID único para cada clic

    nuevoClickRef.set({
        count: click
    })
    .then(() => {
        console.log('Número de clics guardado en Firestore con ID único:', nuevoClickRef.id);
    })
    .catch((error) => {
        console.error('Error al guardar el número de clics:', error);
    });
}

// Obtener referencia al documento 'clicks' en Firestore
const storyRef = db.collection('contador').doc('clicks');

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
// Función para incrementar el contador en Firestore
function actualizarContador(documento) {
    const db = firebase.firestore();
    const increment = firebase.firestore.FieldValue.increment(1);
    const decrement = firebase.firestore.FieldValue.increment(-1);

    const storyRef = db.collection('contador').doc('clicks');
    const contadorRef = db.collection('clicks_contador').doc(documento);

    // Incrementa el contador
    contadorRef.set({ count: firebase.firestore.FieldValue.increment(1) }, { merge: true })
        .then(() => {
            console.log('Contador incrementado en Firestore');
        })
        .catch((error) => {
            console.error('Error al incrementar el contador:', error);
        });
    // Verificar el estado actual del contador en Firestore
    storyRef.get()
        .then((doc) => {
            if (doc.exists) {
                // El documento existe, obtener el valor actual del contador
                const count = doc.data().count;

                // Actualizar el contador en Firestore alternando entre incremento y decremento
                if (count % 2 === 0) {
                    // Si el contador es par, incrementar
                    storyRef.update({ count: increment })
                        .then(() => {
                            console.log('Contador incrementado en Firestore');
                        })
                        .catch((error) => {
                            console.error('Error al incrementar el contador:', error);
                        });
                } else {
                    // Si el contador es impar, decrementar
                    storyRef.update({ count: decrement })
                        .then(() => {
                            console.log('Contador decrementado en Firestore');
                        })
                        .catch((error) => {
                            console.error('Error al decrementar el contador:', error);
                        });
                }
            } else {
                // El documento no existe, inicializar el contador en 1
                storyRef.set({ count: 1 })
                    .then(() => {
                        console.log('Contador inicializado en Firestore');
                    })
                    .catch((error) => {
                        console.error('Error al inicializar el contador:', error);
                    });
            }
        })
        .catch((error) => {
            console.error('Error al obtener el contador:', error);
        });
}
function incrementarContador(nombreDocumento) {
    const db = firebase.firestore();

    // Referencia al documento en la colección "clicks_contador"
    const contadorRef = db.collection('clicks_contador').doc(nombreDocumento);

    // Incrementa el contador
    contadorRef.set({ count: firebase.firestore.FieldValue.increment(1) }, { merge: true })
        .then(() => {
            console.log('Contador incrementado en Firestore');
        })
        .catch((error) => {
            console.error('Error al incrementar el contador:', error);
        });
}