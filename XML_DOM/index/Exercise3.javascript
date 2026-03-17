var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
   if(this.readyState == 4 && this.status == 200){
       var libros = this.responseXML;

  // Título del primer libro
     
  console.log(libros.getElementsByTagName("title")[0].childNodes[0].nodeValue);

  // Todos los títulos
     
  let titulos = libros.getElementsByTagName("title");
     for(let i = 0; i<titulos.length; i++){
       console.log(titulos[i].childNodes[0].nodeValue);
     }

     // Número de atributos del cuarto libro
     
  console.log(libros.getElementsByTagName("book")[3].attributes.length);

     // Valor de los atributos del cuarto libro.
    
  let atributos = libros.getElementsByTagName("book")[3].attributes.length);
     for(let i = 0; i < atributos.length; i++);{
          console.log(atributos[i].nodeValue);
     }
     
     // Número de autores del tercer libro
     
     console.log(libros.getElementsByTagName("book")[2].getElementsByTagName("author").length);
     
     // Autores del tercer libro.
     
let autoresLibro3 = libros.getElementsByTagName("book")[2].getElementsByTagName("author")
for(let i = 0; i < autoresLibro3.length; i++){
   console.log(autoresLibro3[i].childNodes[0].nodeValue);
}
     
// Tabla  que muestra el título, primer autor, precio y año.

let libros2 = libros.getElementsByTagName("book");

let tabla = "<table border = '1'>";

     tabla += "<tr><th>Título</th><th>Autor</th><th>Precio</th><th>Año</th></tr>


  for(let i = 0; i<libros2.length; i++){
          let titulo = libros2[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
          let autor = libros2[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
          let precio = libros2[i].getElementsByTagName("price")[0].childNodes[0].nodeValue;
          let anio = libros2[i].getElementsByTagName("year")[0].childNodes[0].nodeValue;

  tabla += "<tr>";
  tabla += "<td>" + titulo + "</td>";
  tabla += "<td>" + autor + "</td>";
  tabla += "<td>" + precio + "</td>";
  tabla += "<td>" + year + "</td>";
  tabla += "</tr>";
  }

  tabla += "</table>";

  document.body.innerHTML += tabla;
   }
};
xhttp.open("GET", "https://www.w3schools.com/xml/books.xml", true);
xhttp.send();
