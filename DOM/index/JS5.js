console.log("Título del documento:");
console.log(document.title);

// Mostrar todas las imágenes
console.log("Imágenes del documento:");
console.log("Total:", document.images.length);

for (let img of document.images) {
    console.log(img.src);
}

// Mostrar todos los enlaces
console.log("Enlaces del documento:");
console.log("Total:", document.links.length);

for (let link of document.links) {
    console.log(link.href);
}
