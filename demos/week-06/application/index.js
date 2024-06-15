const cells = document.querySelectorAll(".game__cell");
const status = document.querySelector(".game__status");
const restartBtn = document.querySelector(".game__restart");

let started = false;
let nextPlayer = 'X';
let cellState = [
    '', '', '',
    '', '', '',
    '', '', ''
];

const winningState = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function startGame() {
    started = true;

    cellState = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];

    cells.forEach(
        function (cell) {
            cell.innerText = '';
        }
    );

    status.innerText = `Next player is ${nextPlayer}`;
}

function isGameOver() {
    for (let i = 0; i < winningState.length; ++i) {
        const combo = winningState[i];
        const x = combo[0];
        const y = combo[1];
        const z = combo[2];

        console.log(`x = ${x} | y = ${y} | z = ${z}`);

        if (cellState[x] !== '' && (cellState[x] === cellState[y] && cellState[y] === cellState[z])) {
            return 1;
        }
    }

    // EXERCISE: Explore how to use every to redo this logic of drawn game
    for (let i = 0; i < cellState.length; ++i) {
        if (cellState[i] === '') {
            // game not yet over
            return 0;
        }
    }

    // game drawn
    return 2;
}

function onCellClick(event) {
    if (started) {
        // console.log('event = ', event);
        const cell = event.target;
        const idx = cell.getAttribute("data-idx");

        if (cellState[idx] !== '') {
            alert('Cell is occupied. Choose another!');
            return;
        }

        // console.log(idx);

        cellState[idx] = nextPlayer;
        cell.innerText = nextPlayer;

        const gameOver = isGameOver();

        if (gameOver === 1) {
            alert(`Congrats ${nextPlayer}! You won the game.`);
            status.innerText = `Congrats ${nextPlayer}! You won the game.`;
            started = false;
            return;
        } else if (gameOver == 2) {
            // game over with a draw
            alert(`Game has been drawn.`);
            status.innerText = `Game has been drawn`;
            started = false;
        }

        // change to next player
        nextPlayer = nextPlayer === 'X' ? 'O' : 'X';
        status.innerText = `Next player is ${nextPlayer}`;
    }
}

// Hey browser! Please call startGame (startGame()), when the user clicks on the button
restartBtn.addEventListener(
    'click',
    startGame
);

// Hey browser! Please call onCellClick when any cell is clicked
cells.forEach(
    function (cell) {
        cell.addEventListener('click', onCellClick);
    }
)