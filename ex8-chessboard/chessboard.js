const printMe = (i, j) => {
  console.log('You clicked on (' + (i + 1) + ', ' + (j + 1) + ')');
};

const build = () => {
  const numCols = 8,
    numRows = 8,
    pieces = [
      'rook',
      'knight',
      'bishop',
      'queen',
      'king',
      'bishop',
      'knight',
      'rook',
    ],
    theGrid = document.getElementById('theGrid');

  // TODO #2: Build the chessboard with clicking application behavior
  for (let i = 0; i < numRows; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < numCols; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.classList.add((i + j) % 2 === 0 ? 'white' : 'black');
      cell.addEventListener('click', () => printMe(i, j));
      if (i === 0 || i === numRows - 1) {
        const piece = document.createElement('div');
        piece.classList.add('piece');
        piece.classList.add(pieces[j]);
        cell.appendChild(piece);
      }
      row.appendChild(cell);
    }
    theGrid.appendChild(row);
  }
};

build();
