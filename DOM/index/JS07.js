document.getElementById("btnAgregar").addEventListener("click", agregarImagen);

function agregarImagen(){

  let img = document.createElement("img");


  img.src = "https://picsum.photos/200";
  img.alt = "Imagen agregada";
  img.width = 300;

  document.getElementById("contenedor").appendChild(img);
}
