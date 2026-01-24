function eliminarPrimerElemento() {
  var lista = document.getElementById("miLista");
  if (lista.firstElementChild) {
    lista.removeChild(lista.firstElementChild);
  } else {
    alert("No hay más elementos para eliminar.");
  }
}

function eliminarUltimoElemento() {
  var lista = document.getElementById("miLista");
  var ultimo = lista.lastElementChild;
  if (ultimo) {
    lista.removeChild(ultimo);
  } else {
    alert("No hay elementos para eliminar.");
  }
}

function eliminarTodos() {
  var lista = document.getElementById("miLista");
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
}
