const size = 5; 
let board = [];

function createBoard() {
    const boardDiv = document.getElementById("board");
    boardDiv.innerHTML = "";

    board = [];
    for (let row = 0; row < size; row++) {
        board[row] = [];
        for (let col = 0; col < size; col++) {
            board[row][col] = Math.random() < 0.5; 
            const cell = document.createElement("div");
            cell.classList.add("cell");
            if (!board[row][col]) cell.classList.add("off");
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.onclick = () => toggleLights(row, col);
            boardDiv.appendChild(cell);
        }
    }
}

function toggleLights(row, col) {
    change(row, col);
    change(row - 1, col);
    change(row + 1, col);
    change(row, col - 1);
    change(row, col + 1);
    updateView();
    checkWin();
}

function change(r, c) {
    if (r >= 0 && r < size && c >= 0 && c < size) {
        board[r][c] = !board[r][c];
    }
}

function updateView() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        const r = parseInt(cell.dataset.row);
        const c = parseInt(cell.dataset.col);
        if (board[r][c]) cell.classList.remove("off");
        else cell.classList.add("off");
    });
}

function checkWin() {
    if (board.flat().every(v => !v)) {
        setTimeout(() => alert("¡Has ganado! 🎉"), 100);
    }
}

function resetGame() {
    createBoard();
}

window.onload = createBoard;
