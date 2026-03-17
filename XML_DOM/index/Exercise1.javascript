var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
   if(this.readyState == 4 && this.status == 200){
       var xmlDoc = this.responseXML;
console.log(xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue);

console.log(xmlDoc.getElementsByTagName("year")[0].childNodes[0].nodeValue);

console.log(xmlDoc.getElementsByTagName("price")[1].childNodes[0].nodeValue);

console.log(xmlDoc.getElementsByTagName("book")[0].getElementsByTagName("author")[0].childNodes[0].nodeValue);

console.log(xmlDoc.getElementsByTagName("book")[2].getElementsByTagName("author")[0].childNodes[0].nodeValue);

console.log(xmlDoc.getElementsByTagName("book")[2].getElementsByTagName("author")[1].childNodes[0].nodeValue);

console.log(xmlDoc.getElementsByTagName("book")[0].attributes[0].nodeName);

console.log(xmlDoc.getElementsByTagName("book")[0].attributes[0].nodeValue);

console.log(xmlDoc.getElementsByTagName("book")[2].getElementsByTagName("author").length);

let l = xmlDoc.getElementsByTagName("book")[2].getElementsByTagName("author").length;
let a = xmlDoc.getElementsByTagName("book")[2].getElementsByTagName("author");
     for(let i = 0; i<l; i++){
          console.log(a[i].childNodes[0].nodeValue);
     };

let autores = xmlDoc.getElementsByTagName("book")[2].getElementsByTagName("author");
    for(let i = 0; i<autores.length; i++){
          console.log(autores[i].childNodes[0].nodeValue);
        }

console.log(xmlDoc.getElementsByTagName("book")[3].attributes.length);

let attrs = xmlDoc.getElementsByTagName("book")[3].attributes;
    for(let i = 0; i < attrs.length; i++){
       console.log(attrs[i].nodeValue);
      }
   }
};
xhttp.open("GET", "https://www.w3schools.com/xml/books.xml", true);
xhttp.send();

