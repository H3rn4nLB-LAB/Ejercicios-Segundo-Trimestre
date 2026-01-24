function agregarImagen() {

  var img = document.createElement("img");

  img.src = "https://via.placeholder.com/250";   
  img.alt = "Imagen generada por JavaScript";
  img.style.width = "100%"; 

  var contenedor = document.getElementById("contenedorImagen");

  contenedor.appendChild(img);
}
