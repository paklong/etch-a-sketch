const container = document.querySelector('.container');
const clearBtn = document.querySelector('.clearBtn');
const gridSizeBtn = document.querySelector('.gridSizeBtn');



let girdSize = 20;

clearBtn.addEventListener('click', clear);
gridSizeBtn.addEventListener('click', newGrid);


function newGrid() {
    girdSize = prompt("New size? 2 - 60")
    girdSize = girdSize || 32;
    girdSize = girdSize > 60 ? 60 : girdSize;
    girdSize = girdSize < 2 ? 2 : girdSize;
    document.querySelectorAll('.row').forEach(e => e.remove());
    createGrid();
}

function createSquare() {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.height = `${960.0 / girdSize}px`
    square.style.width = `${960.0 / girdSize}px`
    square.addEventListener(
        'mouseleave', () => { square.classList.toggle('hl'); }
    );

    return square;
}


function createRow() {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let i = 0; i < girdSize; i++) {
        row.appendChild(createSquare());
    }
    container.appendChild(row);
}

function createGrid() {
    for (let i = 0; i < girdSize; i++) {
        createRow();
    }
}

function clear() {

    const squares = document.querySelectorAll('.square');

    squares.forEach(
        (square) => square.classList.remove('hl')
    );
}


createGrid();




