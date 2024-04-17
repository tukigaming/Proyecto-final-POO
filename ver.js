function Ver(){
        db.collection("mensajes").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            document.getElementById("Imprime").innerHTML=`${doc.data().Msg}`
            
        });
    });  
}