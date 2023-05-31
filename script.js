function encriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var textoCifrado = texto.replace(/e/igm , "enter");
    var textoCifrado = textoCifrado.replace(/o/igm , "ober");
    var textoCifrado = textoCifrado.replace(/i/igm , "imes");
    var textoCifrado = textoCifrado.replace(/a/igm , "ai");
    var textoCifrado = textoCifrado.replace(/u/igm , "ufat");

    //Estas son las indicaciones para el encriptado y desencriptado//
    //La letra "e" es convertida para "enter"//
    //La letra "i" es convertida para "imes"//
    //La letra "a" es convertida para "ai"//
    //La letra "o" es convertida para "ober"//
    //La letra "u" es convertida para "ufat"//

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto2").innerHTML = textoCifrado;
    document.getElementById("copiar").style.display = "block";
    document.getElementById("copiar").style.display = "inherit"
}

function desencriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var textoCifrado = texto.replace(/enter/img , "e");
    var textoCifrado = textoCifrado.replace(/ober/igm , "o");
    var textoCifrado = textoCifrado.replace(/imes/igm , "i");
    var textoCifrado = textoCifrado.replace(/ai/igm , "a");
    var textoCifrado = textoCifrado.replace(/ufat/igm , "u");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto2").innerHTML = textoCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit"
}

function copy() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
}

function validarTexto(input) {
    var regex = /^[a-zA-Z\s]*$/;
}
    
    if (!regex.test(input.value)) {
    
      input.value = input.value.replace(/[^a-zA-Z\s]/g, '');
    }

