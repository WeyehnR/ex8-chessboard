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
      
      const pieceText = document.createElement('span');
      pieceText.innerText = pieces[i]; // Set the text of the piece
      
      cell.addEventListener('click', () => printMe(i, j));
      
      cell.addEventListener('mouseover', () => {
        cell.classList.add('red');
        
        if (j === 0 || j === numCols - 1) {
          pieceText.classList.add('enlarged-text'); // Apply the enlarged-text class to the piece text
          if(!cell.contains(pieceText)) {
            cell.appendChild(pieceText); // Append the piece text to the cell if it's not already a child
          }
        } else if (j === 1 || j === numCols - 2) {
          pieceText.innerText = 'pawn'; // Set text as 'pawn' for pawn cells
          pieceText.classList.add('enlarged-text'); // Apply the enlarged-text class to the piece text
          if(!cell.contains(pieceText)) {
            cell.appendChild(pieceText); // Append the piece text to the cell if it's not already a child
          }
        }
      });
      
      cell.addEventListener('mouseout', () => {
        cell.classList.remove('red');
        if(cell.contains(pieceText)) {
          cell.removeChild(pieceText); // Remove the piece text if it's a child of the cell
        }
      });
      row.appendChild(cell);
    }
    theGrid.appendChild(row);
  }

};

build();
