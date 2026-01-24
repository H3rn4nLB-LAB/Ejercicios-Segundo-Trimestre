function mostrarParrafos() {
  // Obtener todos los párrafos por nombre de etiqueta
  var parrafos = document.getElementsByTagName("p");

  var divResultado = document.getElementById("resultado");
  divResultado.innerHTML = ""; // limpiar contenido previo

  for (var i = 0; i < parrafos.length; i++) {
    divResultado.innerHTML += parrafos[i].innerHTML + "<br>";
  }
}
