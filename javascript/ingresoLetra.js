function ingresarLetra(e){    
    var tecla = e.keyCode || e.which;
    if(tecla >64 && tecla <91){
        letra = e.key.toUpperCase();
        comprobarLetra(letra);
    }    
}

function comprobarLetra(letra){
    var nuevo = "";
    var fallo = true; 
    
    for (var i= 0; i < palabra.length; i++){    
        if(letra == palabra[i]){            
            nuevo = nuevo + letra + " ";
            fallo = false; 
        }else{
            nuevo = nuevo + palabraGuion[i*2]+ " ";                
        }   
    }
    if (fallo) {
        var resultado = verificarLetra(letra);
        if( resultado ){    
            vidasTotales -= 1;

            if(vidasTotales == 4){
                dibujarPoste();
                dibujarRostro();
            }
            
            if(vidasTotales == 3){
                dibujarTorso();
            }
            
            if (vidasTotales == 2){
                dibujarBrazos();
            }
            
            if (vidasTotales == 1){
                dibujarPiernas();
            }
            
            if (vidasTotales == 0){
                dibujarOjosMuertos();
                dibujarBocaZigzag();
                document.getElementById("resultadoPerdedor").innerHTML = `PERDISTE...!! La palabra secreta era: ${palabra}`;
                document.getElementById("reiniciar-juego").style.display= "block";
                window.removeEventListener("keydown", ingresarLetra); //! acá bloqueo el teclado
            }
            document.getElementById("vidas").innerHTML = `Te quedan ${vidasTotales} vidas...`;                   
        }          
    }  
    
    palabraGuion = nuevo;
    document.getElementById("palabraSecreta").innerHTML = palabraGuion;
    
    if (palabraGuion.search("_") == -1) {
        dibujarRostro();
        dibujarTorso();
        dibujarBrazos();
        dibujarPiernas();
        dibujarOjosFelices();
        dibujarSonrisaFeliz();
        dibujarLenguaFeliz();

        document.getElementById("resultadoGanador").innerHTML = "BRAVOOO....Lo salvaste al amiguito!!";
        document.getElementById("reiniciar-juego").style.display= "block";
        window.removeEventListener("keydown", ingresarLetra); //* bloquea el teclado
    }
}

function verificarLetra(valor){
    letra = valor;
    var agrego = false; //* lo utililizo para determinar si descuentan vidas o no 
    
    if(!letrasErroneas.includes(letra)){
        //* verifico que si no esta incluida en el arreglo de letras erroneas lo incluya
        letrasErroneas.push(letra);
        document.getElementById("letrasError").innerHTML= letrasErroneas;
        agrego = true;
    }else{        
        letrasRepetidas.push(letra);
        //* si ya se encuentra la letra en letras erroneas se incluya el el otro arreglo de letras repetidas
        swal({
            title:`Ya probaste la letra: ${letra}`,
            buttons:false,
            timer:2000
        });
    }
    return agrego;
}