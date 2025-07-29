// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
//VARIABALES
let listaAmigos= [];


// |FUNCIONES|
//guardar en una lista
function agregarAmigo(){
    if ((document.getElementById("amigo").value) == ''){
        alert("Por favor, inserte un nombre");
    }else{
        listaAmigos.push(document.getElementById("amigo").value);
        console.log(`Elementos de la lista: ${listaAmigos}`);
        limpiar();
        listaEnPantalla();
    }
}
//limpiar cuadro de texto
function limpiar(){
    document.querySelector('#amigo').value = '';
}
//imprimir lista en pantalla id=listaAmigos
function listaEnPantalla(){
    let listHTML = document.getElementById("listaAmigos");
    listHTML.innerHTML = "";
    for (let index = 0; index < listaAmigos.length; index++) {
        listHTML.innerHTML += `<li>${listaAmigos[index]}</li`;
        
    }
}
