# RocktheCode_P03

Este proyecto "Photozy" se trata de utilizar el código asíncrono que permite que las operaciones se realicen en paralelo con otras operaciones.
El manejo de código asíncrono se ha hecho principalmente a través de la sintaxis async/await.

Es una réplica de una aplicación de fotos usando la API de Unsplash para realizar las peticiones hecho con VITE.
Se puede ver diferentes tipos de imágenes mediante la búsqueda que realice un usuario.

Todos los datos que aparecen pintados se obtienen mediante la API de Unsplash.

Es una aplicación full responsive con un HTML minimo y un CSS muy minimalista.

El código está repartido en los componentes Header, Footer y Main.  

Si no se encuentran imágenes con la frase introducida, se mostrará el mensaje "Ooooops, no photos found! Try a new search..."
Se limpiará el input después de cada búsqueda para que no moleste hacer una nueva búsqueda.
Se puede volver al estado inicial de la página haciendo click en el propio logo o limpiendo el "search input".

Cada "card" incluye la información del autor y fecha de publicación. Haciendo click en el button "Visit" el usuario sera redirigido hasta la foto en la página de Unsplash.

Cuando el usuario realiza el scroll hasta el final de la página, nuevo contenido sera cargado automaticamente.

Enjoy!

