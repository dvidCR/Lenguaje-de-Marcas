function getRandomDogImage() {
    // URL de la API de perros
    const apiUrl = 'https://dog.ceo/api/breeds/image/random';

    // Hacer una solicitud a la API usando fetch
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Verificar si la solicitud fue exitosa
        if (data.status === 'success') {
          // Obtener la URL de la imagen
          const imageUrl = data.message;

          // Mostrar la imagen en el contenedor con dimensiones específicas
          displayDogImage(imageUrl, 400, 300);

          // Mostrar el objeto JSON asociado con la imagen en la consola
          console.log(data);
        } else {
          console.error('Error al obtener la imagen del perro');
        }
      })
      .catch(error => {
        console.error('Error de red:', error);
      });
  }

  function displayDogImage(imageUrl, width, height) {
    // Obtener el contenedor de la imagen
    const dogImageContainer = document.getElementById('dogImageContainer');

    // Crear un elemento de imagen
    const imageElement = document.createElement('img');

    // Establecer la fuente de la imagen
    imageElement.src = imageUrl;

    // Establecer las dimensiones de la imagen
    imageElement.width = width;
    imageElement.height = height;

    // Limpiar el contenedor antes de agregar la nueva imagen
    dogImageContainer.innerHTML = '';

    // Agregar la imagen al contenedor
    dogImageContainer.appendChild(imageElement);
  }