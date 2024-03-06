// Función asíncrona para realizar el request a la API
async function obtenerPosts() {
    try {
      // Realizar la solicitud utilizando fetch y await
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

      // Mostrar los resultados en HTML
    const postListElement = document.getElementById('post-data');
    postListElement.innerHTML = ''; 

    posts.forEach(post => {
        const postItem = document.createElement('div');
        postItem.classList.add('post-item', 'tc', 'pa3', 'ba', 'bw1', 'mb2', 'shadow-1', 'w-50', 'center');
        postItem.innerHTML = `  <p>ID: <span style="color: blue;">${post.id}</span></p>
                                <p>Title: <strong>${post.title}</strong></p>
                                <p>Body: ${post.body}</p>`;
        postListElement.appendChild(postItem);
    });

    } catch (error) {
      // Manejar posibles errores con try-catch
    console.error('Error al obtener los posts:', error);
    }
}

  // Función para ser llamada desde el botón en el HTML
    function getPosts() {
    obtenerPosts();
}
