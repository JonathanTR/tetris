boardMaker = function(height, width){
  var board = [];
  for(var row = 0; row < height; row++){
    currentRow = [];
    for(var col = 0; col < width; col++){
      currentRow.push(new Tile());
    }
    board.push(currentRow);
  }
  return board
}

// tiles
Tile = function(){
  this.active = false; 
};
Tile.prototype.activate = function(){
  this.active = true;
};
Tile.prototype.deactivate = function(){
  this.active = false;
}

// Pieces
Piece = function(){
  this.origin = [0, 4]
}

// Game
TetrisGame = function(){
  this.board = boardMaker(20, 10)
}

TetrisGame.prototype.startPiece = function(){
  var currentPiece = new Piece()
  var row = currentPiece.origin[0]
  var col = currentPiece.origin[1]
  this.board[row][col].activate()
}
