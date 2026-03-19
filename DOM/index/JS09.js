let timeoutID;

timeoutID = setTimeout(function(){
    alert("Han pasado 5 segundos");
}, 5000);

document.getElementById("btnDetener").addEventListener("click", function() {
   clearTimeout(timeoutID);
  alert("El tiempo de espera de alerta ha sido detenido");
});
