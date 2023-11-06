var nueva_palabra = document.getElementById("nueva-palabra");
nueva_palabra.addEventListener("click", validar_palabra);

function validar_palabra(){
    var palNueva = document.getElementById("inputPalabraNueva").value.toUpperCase();
    var patronValido = /^[A-Z]+$/g;
    
    if (patronValido.test(palNueva)){
        palabras.push(palNueva);
        swal({
            text:"Palabra agregada satisfactoriamente!!",
            icon: "success",
            buttons:false,
            timer: 2000,
        });
    }else{
        if(palNueva.length == 0 ){
            swal({
                text: "Debe ingresar una palabra!!",
                icon: "error",
                buttons:false ,
                timer:2000,
            });

        }else{
            swal({
                text: "Únicamente se admiten letras (sin acentos)",
                icon: "error",
                buttons:false ,
                timer:2000,
            });
        }        
    }

    document.getElementById("inputPalabraNueva").value = "";
    document.getElementById("inputPalabraNueva").focus();
}