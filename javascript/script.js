const palabras = [
  'PERRO',
  'FUTBOL',
  'CACEROLA',
  'DISCO',
  'AUTOMOVIL',
  'PROGRAMADOR',
  'JAVASCRIPT',
  'ALURA',
  'ORACLE',
];
let palabra;
let palabraGuion;
const letrasRepetidas = [];
const letrasErroneas = [];
let vidasTotales = 5;

document.getElementById('ahorcado').style.display = 'none';
document.getElementById('reiniciar-juego').style.display = 'none';

const jugar = document.getElementById('iniciar-juego');
const sectorAhorcado = document.getElementById('sectorAhorcado');

jugar.addEventListener('click', function () {
  sectorAhorcado.style.display = 'flex';
  sectorAhorcado.scrollIntoView({ behavior: 'smooth' });
  document.getElementById('ahorcado').style.display = 'block';

  iniciarJuego();

  window.addEventListener('keydown', ingresarLetra);
});

function iniciarJuego() {
  palabra = palabras[Math.floor(Math.random() * palabras.length)];
  palabraGuion = '_ '.repeat(palabra.length);
  document.getElementById('palabraSecreta').innerHTML = palabraGuion;
  document.getElementById('tituloLetras').innerHTML = 'LETRAS EQUIVOCADAS';
  vidasTotales = 5;
  letrasRepetidas.length = 0; //* Reinicia el arreglo sin cambiar la referencia
  letrasErroneas.length = 0; //* Reinicia el arreglo sin cambiar la referencia
  document.getElementById('letrasError').innerHTML = '';
  document.getElementById('vidas').innerHTML =
    'LA CANTIDAD DE VIDAS ES: ' + vidasTotales;
}
