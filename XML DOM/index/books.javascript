fetch('https://github.com/H3rn4nLB-LAB/Ejercicios-Segundo-Trimestre/blob/main/XML%20DOM/index/books.xml')
  .then(response => response.text())
  .then(str => {
    window.xmlDoc = new window.DOMParser().parseFromString(str, "text/xml");
    console.log("XML cargado desde GitHub.");
  });
