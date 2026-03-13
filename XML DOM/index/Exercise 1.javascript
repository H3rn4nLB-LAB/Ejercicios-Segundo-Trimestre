document.getElementsByTagName("title")[0].childNodes[0].nodeValue;

document.getElementsByTagName("year")[0].childNodes[0].nodeValue;

document.getElementsByTagName("price")[1].childNodes[0].nodeValue;

document.getElementsByTagName("book")[0].getElementsByTagName('author')[0].childNodes[0].nodeValue;

document.getElementsByTagName("book")[2].getElementsByTagName("author")[0].childNodes[0].nodeValue;

document.getElementsByTagName("book")[2].getElementsByTagName("author")[1].childNodes[0].nodeValue;

document.getElementsByTagName("book")[0].attributes[0].nodeName;

document.getElementsByTagName("book")[0].attributes[0].nodeValue;

document.getElementsByTagName("book")[2].getElementsByTagName("author").length;

l = document.getElementsByTagName("book")[2].getElementsByTagName('author').length;
a = document.getElementsByTagName("book")[2].getElementsByTagName('author');
for(i = 0; i < l; i++)

let autores = document.getElementsByTagName("book")[2].getElementsByTagName('author');
for (let i = 0; i < autores.length; i++) {
    console.log(autores[i].childNodes[0].nodeValue);
}

document.getElementsByTagName("book")[3].attributes.length;

let attrs = document.getElementsByTagName("book")[3].attributes;
for (let i = 0; i < attrs.length; i++) {
    console.log(attrs[i].nodeValue);
}
