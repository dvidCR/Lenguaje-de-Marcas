function pintar() {
    var color = prompt("Inserta un color para pintar el primer div");
    var div = document.getElementsByClassName("clase1")[0];
    div.style = "background-color: "+ color;
}

function ejecutar() { 
    var texto = prompt(" Escriba el texto del párrafo: "); 
    var etiqueta = document.createElement("p"); 
    var contenedor = document.createElement("div"); 
    var contenido = document.createTextNode (texto); 
    etiqueta.appendChild (contenido); 
    contenedor.appendChild(etiqueta);
    document.body.appendChild(contenedor);
}

function tabla() {
    let cabezera = [1, 2, 3, 4];
    let filas = [];

    for (var i = 0; i < 8; i++) {
        var contenido = prompt("Que quieres poner en la casilla");
        filas.push(contenido);
    }
    
    var tabla = document.createElement("table");
    tabla.border = "1";
    var thead = document.createElement("thead");
    var tr1 = document.createElement("tr");
    var tr2 = document.createElement("tr");

    for (var i = 0; i < cabezera.length; i++) {
        var th = document.createElement("th");
        var contTh = document.createTextNode(cabezera[i]);
        th.appendChild(contTh);
        thead.appendChild(th);
    }

    for (var i = 0; i < filas.length; i++) {
        if (i < 4) {
            var td1 = document.createElement("td");
            var conttd1 = document.createTextNode(filas[i]);
            td1.appendChild(conttd1);
            tr1.appendChild(td1);

        } else {
            var td2 = document.createElement("td");
            var conttd2 = document.createTextNode(filas[i]);
            td2.appendChild(conttd2);
            tr2.appendChild(td2);
        }
    }
    tabla.appendChild(thead);
    tabla.appendChild(tr1);
    tabla.appendChild(tr2);
    document.body.appendChild(tabla);
}