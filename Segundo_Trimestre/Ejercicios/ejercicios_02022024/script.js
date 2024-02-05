window.onload = function() {
    Ejercicio1_Boolean()
    Ejercicio1_String()
    Ejercicio2_String()
    Ejercicio1_Array()
}

function Ejercicio1_Boolean() {
    e1 = 7;
    e2 = 1;
    e3 = 5;
    e4 = 10;
    e5 = 2;
    e6 = 2;
    
    var x1 = new Boolean(e1 > e3);
    var x2 = new Boolean(e2 < e4);
    var x3 = new Boolean(e5 = e6);

    if (x1) {
        console.log("x1 Es cierto")
    } else {
        console.log("x1 Es falso")
    }

    if (x2) {
        console.log("x2 Es cierto")
    } else {
        console.log("x2 Es falso")
    }

    if (x3) {
        console.log("x3 Es cierto")
    } else {
        console.log("x3 Es falso")
    }

}

function Ejercicio1_String() {
    let mensaje = ["hola", "adios", "buenastardes", "bichomon"]
    var par = ""
    for (var cont = 0; cont < mensaje.length; cont++) {
        var rep = 0
        if (mensaje[cont].length % 2 == 0) {
            for (var cont1 = 0; cont1 < mensaje[cont].length; cont1++) {
                if (mensaje[cont][cont1] == "a") {
                    rep++
                }
            }
            par = "Es par"
        } else {
            for (var cont1 = 0; cont1 < mensaje[cont].length; cont1++) {
                if (mensaje[cont][cont1] == "a") {
                    rep++
                }
            }
            par = "Es impar"
        }
        console.log(mensaje[cont] + " " + par + " y tiene " + rep + " a.")
    }
}

function Ejercicio2_String() {
    var mensaje = "Hola, ¿qué tal estás?";

    for (var cont = 0; cont < mensaje.length; cont++) {
        var random = Math.random(mensaje.length);
        var mensaje_modificado = mensaje[random] + mensaje_modificado;
    }

    console.log(mensaje_modificado);
}

function Ejercicio1_Array() {
    let array = ([1, "Hola", 3], ["Adiós", 3, 2])

    
}


var frase = document.querySelector("#frase").value;
