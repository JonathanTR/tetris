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

placeOn = function(board, piece){
  
  board[0][4].active = true;
}

// tiles
Tile = function(){
  this.active = false; 
}

// Pieces
Piece = function(){
  this.origin = [0, 4]
}

// Game
TetrisGame = function(){
  this.board = boardMaker(20, 10, new Tile())
}

