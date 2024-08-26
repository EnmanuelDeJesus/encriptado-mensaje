// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

const d = document;
const textArea = d.querySelector(".form__input");
const imagenMuneco = d.querySelector(".resultado__img");
const resultadoTitulo = d.querySelector(".resultado__titulo");
const resultadoParrafo = d.querySelector(".resultado__parafo ");
const botonEncriptar = d.querySelector(".form__btn");
const botonDesencriptar = d.querySelectorAll(".form__btn");
const botonCopiar = d.querySelector(".resultado__btn");
const llave =[
     ["e" , "enter"], 
     ["i" , "imes"], 
     ["a" , "ai"], 
     ["o" , "ober"],
     ["u" , "ufat"]
];

// funcion para encriptar
function encriptarMensaje(mensaje) {
    let mensajeEncriptado= "";
    for(let i = 0; i < mensaje.length; i++){
        let letra = mensaje[i];
        let encriptada = letra;
        for(let j = 0; j < llave.length; j++){
            if(letra === llave[j][0]){
                encriptada = llave[j][1]; //reemplaza la letre por su euivalente encripado
                break; // fin del bucle
            }
        }
        mensajeEncriptado += encriptada;
    }
    return mensajeEncriptado
};
// funcion para desencriptar 
function desencriptarMensaje(mensaje){
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < llave.length; i++) {
        let regex = new RegExp(llave[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llave[i][0]); // remplaza el texto encriptado por su euivalente
    }
    return mensajeDesencriptado; // devuelve el mensaje desencriptado
};
// ocultar elementos
textArea. addEventListener("input",(e)=>{
    imagenMuneco.style.display = "none"; 
    resultadoTitulo.textContent = "Capturando Mensaje.";
    resultadoParrafo.textContent = "";
});
// funcion del boton encriptar
botonEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarMensaje(mensaje);
    resultadoParrafo.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden"); 
    resultadoTitulo.textContent = "tu mensaje es:";
});
// funcion del boton desencriptar
botonDesencriptar[1].addEventListener("click", (e)=> {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadoParrafo.textContent = mensajeDesencriptado;
    resultadoTitulo.textContent = "tu mensaje es:";
    botonCopiar.classList.remove("hidden");
});
// Funcion del boton copiar
botonCopiar.addEventListener('click', ()=>{
    let textoCopiado = resultadoParrafo.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=>{
        imagenMuneco.style.display = "block";
        resultadoTitulo.textContent = "El texto se copio";
        botonCopiar.classList.add("hidden");
        resultadoParrafo.textContent = "";
    })
});



