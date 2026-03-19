document.getElementById("enviar").addEventListener("click", mostrarMensaje);

function mostrarMensaje(){

   let formulario = document.forms["Formulario"];
   
   let nombre = formulario("nombre").value;
   let apellidos = formulario("apellidos").value;

  document.getElementById("resultado").innerHTML =
         "Hola "+ nombre + " "+ apellidos + ", gracias por completar el formulario. ";

}
