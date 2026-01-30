console.log("Título de la página:", document.title);


const imgs = document.images;


console.log("Imágenes encontradas:", imgs.length);
for (let i = 0; i < imgs.length; i++) {
  console.log(i + 1 + ":", imgs[i].src);
}


const links = document.links;


console.log("Enlaces encontrados:", links.length);
for (let i = 0; i < links.length; i++) {
  console.log(i + 1 + ":", links[i].href, "-", links[i].textContent.trim());
}
