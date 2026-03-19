const codeArea = document.getElementById("codeArea");
const result = document.getElementById("result");

codeArea.addEventListener("input", function () {
    result.innerHTML = codeArea.value;
});
