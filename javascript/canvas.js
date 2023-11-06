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
    //ojo izquierdo
    ctx.moveTo(130,135);
    ctx.lineTo(140,150);
    ctx.moveTo(140,135);
    ctx.lineTo(130,150);
    //ojo derecho
    ctx.moveTo(160,135);
    ctx.lineTo(170,150);
    ctx.moveTo(170,135);
    ctx.lineTo(160,150);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
}