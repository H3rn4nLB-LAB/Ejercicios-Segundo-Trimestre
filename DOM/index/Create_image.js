function agregarImagen() {

  var img = document.createElement("img");

  img.src = "https://picz.dev/landscape";   
  img.alt = "Imagen generada por JavaScript";
  img.style.width = "100%"; 

  var contenedor = document.getElementById("contenedorImagen");

  contenedor.appendChild(img);
}
