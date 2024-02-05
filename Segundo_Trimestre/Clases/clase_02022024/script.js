var x1 = new Boolean(false);
var x2 = new Boolean(false);
var x3 = false;
    if (x3) { //false
        console.log("Entro en el if");
    }else{
        console.log("No entro en el if");
    }

    console.log(x2.toString());
    var x4 = x2.toString(); //Convierte a cadena de caracteres
    console.log(x4[0] + " " +x4[1] + " " + x4.charAt(2) + " " + x4.charAt(3) + ` ${x4[4]}`);
    console.log(x2.valueOf());
    console.log(typeof(x1));
    console.log(typeof(x3));
    console.log(typeof(x2.valueOf));
    console.log(typeof(x2.valueOf()));