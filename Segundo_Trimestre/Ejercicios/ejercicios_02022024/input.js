var contar = document.querySelector("[value=\"Contar\"]").setAttribute("onclick", "contarA();")

var invertir = document.querySelector("[value=\"Invertir\"]").setAttribute("onclick", "invertiP();")

function contarA() {
    var mensaje = new String(document.querySelector("#frase").value)
    var cont = 0

    for (var i = 0; i < mensaje.length; i += 2) {
        for (l of mensaje[i]) {
            if (l === "a") {
                cont++
            }
        }
    }

    console.log(cont)
}