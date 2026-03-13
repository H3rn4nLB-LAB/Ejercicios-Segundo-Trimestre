fetch('https://www.w3schools.com/xml/books.xml')
  .then(response => response.text())
  .then(str => {
    window.xmlDoc = new window.DOMParser().parseFromString(str, "text/xml");
    console.log("XML cargado desde GitHub.");
  });
