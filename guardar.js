function guardar(){
db.collection("mensajes").add({
    Msg: document.getElementById("msg").value,
    
})
.then((docRef) => {
    alert("Registro Exitoso")
})
.catch((error) => {
    alert("A ocurrido un Error")
});
}