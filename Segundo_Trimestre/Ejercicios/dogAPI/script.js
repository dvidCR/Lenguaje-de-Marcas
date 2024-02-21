localStorage.guardar = JSON.stringify([]);
var cont = 1;
//var rep = 0

function dogAPI(imagen, raza) {
  var mostrar = document.getElementById(cont);
  mostrar.innerHTML = `<img src="${imagen}" alt="imagen de un perro" width="200px" height="150px">`;
  p = document.createElement("p")
  nombre = document.createTextNode(`${raza}`)
  p.appendChild(nombre)
  mostrar.appendChild(p)
  cont++;
  if (cont > 9) {
    cont = 1;
  }
}

function razas(link) {
  var r = link.split("/")
  var array = JSON.parse(localStorage.guardar);
  array.push(r[4]);
  localStorage.guardar = JSON.stringify(array);
  dogAPI(link, r[4])
}

function start() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
      let imagen = data.message;
      razas(imagen);
    })
}