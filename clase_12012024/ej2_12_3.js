function ej1() {
    var num = prompt("Escribe un número")
    alert(num.length)
}

function ej2() {
    var cadena = prompt("De cuanto quieres la cadena de *")
    var asterisco = ""
    for (var cont = 0; cont < cadena; cont++) {
        asterisco = asterisco + "*"
    }
    alert(asterisco)
}

function ej3() {
    var secuencia = prompt("De que tan largo quieres la cadena")
    var cadena = ""
    var cambios = 0
    for (var cont = 0; cont < secuencia; cont++) {
        if (cambios == 0) {
            cadena = cadena + "*"
        }

        if (cambios == 1) {
            cadena = cadena + "+"
        }

        if (cambios == 2) {
            cadena = cadena + "_"
            cambios = 0 - 1
        }
        cambios++
    }
    alert(cadena)
}

function ej4() {
    var ocupado = ""
    for (var cont = 0; cont < 6; cont++) {
        for (var j = 0; j < cont; j++) {
            ocupado = ocupado + "*"
        }
        ocupado = ocupado + "\n"
    }
    alert(ocupado)
}

function ej5() {
    var dia1 = prompt("Pon el primer dia")
    var mes1 = prompt("Pon el primer mes")
    var año1 = prompt("Pon el primer año")
    var dia2 = prompt("Pon el segundo dia")
    var mes2 = prompt("Pon el segundo mes")
    var año2 = prompt("Pon el segundo año")
    let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
    let diasAños = []
    let diasMeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    for (var cont = año1; cont < año2; cont++) {
        if (cont % 4 === 0) {
            diasAños.push(366);
            diasMeses[1] = 29;
        } else {
            diasAños.push(365);
            diasMeses[1] = 28;
        }
    }
}