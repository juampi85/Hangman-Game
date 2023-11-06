var palabras = ["PERRO", "FUTBOL", "CACEROLA", "DISCO", "AUTOMOVIL", "PROGRAMADOR", "JAVASCRIPT", "ALURA", "ORACLE"];
var palNueva;
var letra;
var letrasRepetidas= [];
var letrasErroneas= [];
var vidasTotales = 5;
var palabra;
var palabraGuion;
var repetida = false;

document.getElementById("ahorcado").style.display = "none";
document.getElementById("reiniciar-juego").style.display= "none";

var jugar = document.getElementById("iniciar-juego")
jugar.addEventListener("click", function(){
    document.getElementById("sectorAhorcado").style.display = "flex";           
    document.getElementById("ahorcado").style.display = "block";

    palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraGuion = palabra.replace(/./g , "_ ")

    document.getElementById("palabraSecreta").innerHTML = palabraGuion
    document.getElementById("tituloLetras").innerHTML = "LETRAS EQUIVOCADAS"
    document.getElementById("vidas").innerHTML = "LA CANTIDAD DE VIDAS ES:  " + vidasTotales; 
    dibujarBase()
    window.addEventListener("keydown", ingresarLetra);    
})
