// Group A

document.getElementById("btnSerif").addEventListener("click", function () {
    document.getElementById("text").style.fontFamily = "serif";
});

document.getElementById("btnSans").addEventListener("click", function () {
    document.getElementById("text").style.fontFamily = "sans-serif";
});

document.getElementById("btnMono").addEventListener("click", function () {
    document.getElementById("text").style.fontFamily = "monospace";
});

// Group B

document.getElementById("imgRed").addEventListener("click", function () {
    document.getElementById("myImage").src = "https://via.placeholder.com/200/ff0000";
});

document.getElementById("imgGreen").addEventListener("click", function () {
    document.getElementById("myImage").src = "https://via.placeholder.com/200/00ff00";
});

document.getElementById("imgBlue").addEventListener("click", function () {
    document.getElementById("myImage").src = "https://via.placeholder.com/200/0000ff";
});

// Group C
document.getElementById("msg1").addEventListener("click", function () {
    document.getElementById("messageBox").innerHTML = "Hello!";
});

document.getElementById("msg2").addEventListener("click", function () {
    document.getElementById("messageBox").innerHTML = "Welcome to JavaScript!";
});

document.getElementById("msg3").addEventListener("click", function () {
    document.getElementById("messageBox").innerHTML = "Goodbye!";
});
