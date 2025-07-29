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
        limpiar();
        listaEnPantalla();
    }
}
//limpiar cuadro de texto
function limpiar(){
    document.querySelector('#amigo').value = '';
}
//imprimir lista en pantalla 
function listaEnPantalla(){
    let listHTML = document.getElementById("listaAmigos");
    listHTML.innerHTML = "";
    for (let index = 0; index < listaAmigos.length; index++) {
        listHTML.innerHTML += `<li>${listaAmigos[index]}</li>`;
    }
}
//elegir un amigo aleatorio 
function sortearAmigo(){
    let resultHTML = document.getElementById("resultado");
    resultHTML.innerHTML ="";
    if (listaAmigos != ""){
        let indexAleatorio = listaAmigos.length;
        indexAleatorio= Math.floor(Math.random()*indexAleatorio);
        resultHTML.innerHTML = `Amigo sorteado: ${listaAmigos[indexAleatorio]}`;
    }else{
        agregarAmigo();
    }
}
