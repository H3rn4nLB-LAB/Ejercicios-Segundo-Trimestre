function mostrarMensaje(){

   let nombre = document.getElementById("nombre").value;
   let apellidos = document.getElementById("apellidos").value;

  document.getElementById("resultado").innerHTML =
         "Hola "+ nombre + " "+ apellidos + ", gracias por completar el formulario. ";

}
