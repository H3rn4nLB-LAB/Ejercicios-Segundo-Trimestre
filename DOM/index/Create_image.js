document.getElementById("btnAgregar").addEventListener("click", crearImagen);

function crearImagen() {

  let img = document.createElement("img");

  img.src = "https://picsum.photos/200";   
  img.alt = "Imagen generada por JavaScript";
  img.width = 200; 

 document.getElementById("contendor").appendChild(img);
}
