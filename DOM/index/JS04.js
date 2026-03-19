document.getElementById("btnEliminar").addEventListener("click", eliminarElemento);

function eliminarElemento() {

  let lista = document.getElementById("ListaElementos");

  let ultimo = lista.lastElementChild;

  if(ultimo) {
       lista.removeChild(ultimo);
  }
}
