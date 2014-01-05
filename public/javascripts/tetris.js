// MODEL
boardMaker = function(height, width, val){
  var board = [];
  for(var row = 0; row < height; row++){
    currentRow = [];
    for(var col = 0; col < width; col++){
      currentRow.push(val);
    }
    board.push(currentRow);
  }
  return board
}

TetrisGame = function(){
  this.board = boardMaker(20, 10, 'cat')
}

// VIEW
renderBoard = function(board, handle){
  var domBoard = document.getElementById(handle);
  var modelBoard = board;
  for(var y = 0; y < modelBoard.length; y++){
    var row = document.createElement('div');
    row.setAttribute('class', 'row');
    for(var x = 0; x < modelBoard[y].length; x++){
      var modelCell = modelBoard[y][x];
      var cell = document.createElement('div');
      cell.setAttribute('class', 'cell');
      row.appendChild(cell);
    }
    domBoard.appendChild(row);
  }
}

// CONTROLLER
window.onload = function(){
  tetris = new TetrisGame();
  renderBoard(tetris.board, 'tetrisBoard')
}