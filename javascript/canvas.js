var canvas = document.getElementById("ahorcado");
var ctx = canvas.getContext("2d");

function dibujarBase(){
    ctx.beginPath();
    ctx.moveTo(20, 350);
    ctx.lineTo(250, 350);
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#000";
    ctx.stroke();
    ctx.closePath();
}

function dibujarPoste(){
    ctx.beginPath();
    ctx.moveTo(150, 100);
    ctx.lineTo(150, 100);
    ctx.moveTo(150, 120);
    ctx.lineTo(150, 100);
    ctx.lineTo(50,100);    
    ctx.lineTo(50, 350);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#000";
    ctx.stroke();
    ctx.closePath();
}

function dibujarRostro(){
    ctx.beginPath();
    ctx.arc(150,155,35,0,Math.PI * 2, false);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
}

function dibujarTorso(){
    ctx.beginPath();
    ctx.moveTo(150,190);
    ctx.lineTo(150,250);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
}

function dibujarBrazos(){
    ctx.beginPath();
    ctx.moveTo(120,220);
    ctx.lineTo(150,192);
    ctx.lineTo(180,220)
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
}

function dibujarPiernas(){
    ctx.beginPath();
    ctx.moveTo(120,290);
    ctx.lineTo(150,250);
    ctx.lineTo(180,290)
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
}

function dibujarOjosMuertos(){
    ctx.beginPath();
    //* ojo izquierdo
    ctx.moveTo(130,135);
    ctx.lineTo(140,150);
    ctx.moveTo(140,135);
    ctx.lineTo(130,150);
    //* ojo derecho
    ctx.moveTo(160,135);
    ctx.lineTo(170,150);
    ctx.moveTo(170,135);
    ctx.lineTo(160,150);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
}

function dibujarBocaZigzag() {
  ctx.beginPath();
  ctx.moveTo(140, 170); //* Llevo a la posición inicial de la boca
  ctx.lineTo(143, 175); //* Acá dibujo el primer triángulo
  ctx.lineTo(146, 170);
  ctx.lineTo(149, 175); //* Acá dibujo el segundo triángulo
  ctx.lineTo(152, 170);
  ctx.lineTo(155, 175); //* Acá dibujo el tercer triángulo
  ctx.lineTo(158, 170);
  ctx.lineTo(161, 175); //* Acá dibujo el cuarto triángulo
  ctx.lineTo(164, 170);
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.closePath();
}


function dibujarOjosFelices() {
  //* Dibujo dos ojitos felices (como 2 círculos azules) en la posición deseada.
  ctx.beginPath();
  ctx.arc(140, 145, 5, 0, Math.PI * 2, false);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(160, 145, 5, 0, Math.PI * 2, false);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.closePath();
}

function dibujarSonrisaFeliz() {
  //* Acá dibujé una sonrisa feliz (en forma de arco) en la posición deseada.
  ctx.beginPath();
  ctx.arc(150, 165, 15, 0, Math.PI, false);
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'red';
  ctx.stroke();
  ctx.closePath();
}

function dibujarLenguaFeliz() {
  //* Acá hice la lengua de alegría (lo resolví como un óvalo) en la posición deseada.
  ctx.beginPath();
  ctx.ellipse(150, 178, 8, 20, 0, 0, Math.PI, false);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.closePath();
}