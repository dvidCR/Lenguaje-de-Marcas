window.onload = function () {
    cambiarGen1();
    cambioColor();
    url();
    domain();
    imagenes();
    cambioimg();
    voladores();
}

function cambiarGen1() {

    elemento = document.getElementById("gen-1");
    elemento.removeChild(elemento.firstChild);
    texto = document.createTextNode("PUCHAMONES PRIMERA GENERACION");
    elemento.appendChild(texto);
}

function cambioColor() {
    elementos = document.getElementsByClassName("infocard-list-pkmn-lg");
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.backgroundColor = "white";
    }
}

function url(){
    console.log(window.location.href);
}

function domain(){
    console.log(window.location.hostname);
}

function imagenes(){
    var imagenes = document.getElementsByTagName('img');

    for (var i = 0; i < imagenes.length; i++) {
        console.log(imagenes[i]);
    }
}

function cambioimg(){
    setTimeout(1)
    var imagenes = document.getElementsByTagName('img');

    for (var i = 0; i < imagenes.length; i++) {
        imagenes[i].src = 'https://i.gifer.com/XOsX.gif';
    }
}

/*function voladores() {
    var elementos = document.getElementsByClassName('infocard');

    Array.from(elementos).forEach(function (element) {
        if (element.getElementsByClassName('itype flying').length > 0) {
            element.style.backgroundColor = "blue";
        }
    });
}*/