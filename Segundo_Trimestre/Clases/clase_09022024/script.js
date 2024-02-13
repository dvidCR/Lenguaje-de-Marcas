/*function registro(nombre, dni, email = "Sin email", telefono = "Sin teléfono") {
    var datos = [nombre, dni, email, telefono];
    alert(`Ha sido registrado con los datos:\n ${datos}`);
  }
  registro("Davinia de la Rosa", "11111111A");*/

 // Asignar nombres a elementos de objetos pasados por parámetro
/*function imprime ([ saludo, hora ]) {
    console.log(`${saludo}, buenos ${hora}`);
}
imprime("hola", "dias"); //Quita los [] y explica lo que pasa*/


/*let misConocimientos = ['variables', 'operadores', 'estructuras de control', 'funciones'];
let aprendido = ['spread', 'local storage'];
let misConocimientosAmpliados = [...misConocimientos, ...aprendido, 'otra cosa más'];
console.log(misConocimientosAmpliados);*/

/*try {
  throw "Error creado por Davinia";
} catch (e) {
  console.log("Se ha producido una excepción: " + e);
} finally {
  console.log("El finally se ejecuta sí o sí");
}*/

/*try {
    throw {
      toString: function () {
        return "Error creado por Davinia desde una función anónima";
      },
    };
  } catch (e) {
    console.log("Se ha producido una excepción: " + e);
  } finally {
    console.log("El finally se ejecuta sí o sí");
  }*/

/*try {
    function f() {
    return "Error creado por Davinia desde una función";
    }
    throw { toString: f };
} catch (e) {
    console.log("Se ha producido una excepción: " + e);
} finally {
    console.log("El finally se ejecuta sí o sí");
}*/

try {
    f();
} catch (e) {
    if (e instanceof ReferenceError) {
      console.log("Se ha producido una excepción: " + e);
    }
} finally {
    console.log("El finally se ejecuta sí o sí");
}