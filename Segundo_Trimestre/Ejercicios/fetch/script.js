window.onload = function searchUserInfo() {
    // Hacer la solicitud a la API de GitHub
    fetch("https://api.github.com/users/dvidcr")
      .then(response => response.json())
      .then(data => {
        // Se pondria data. y el nombre del dato del JSON que quieras sacar
        // Por ejemplo el data.login, el login seria en el JSON {"login": "dvidCR",}
        // De ahi como ya se ve ve me saca el contenido que es dvidCR
        var name = data.login;
        var repoCount = data.public_repos;
        var avatarUrl = data.avatar_url;

        // Mostrar la información en la página
        var resultContainer = document.getElementById('result');
        resultContainer.innerHTML = `
          <p>Nombre: ${name}</p>
          <p>Número de repositorios: ${repoCount}</p>
          <img src="${avatarUrl}" alt="Avatar">
        `;

        // Imprimir la información en la consola
        console.log('Nombre:', name);
        console.log('Número de repositorios:', repoCount);
        console.log('Avatar:', avatarUrl);
      })
      // Atrapa el error y creando una funcion llamada error creo la mia propia para luego sacarla
      .catch(error => console.error('Error al obtener la información:', error));
  }