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

// Tiles
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
Piece.prototype.dropOneLevel = function(){
  this.origin[0] +=1
}

// Game
TetrisGame = function(){
  this.board = boardMaker(20, 10)
}
TetrisGame.prototype.parsePiece = function(piece){
  var row = piece.origin[0]
  var col = piece.origin[1]
  this.board[row][col].activate()
}
TetrisGame.prototype.initPiece = function(){
  var currentPiece = new Piece()
  this.parsePiece(currentPiece)
  return currentPiece
}
TetrisGame.prototype.dropPiece = function(piece){
  piece.dropOneLevel()
  this.parsePiece(piece)
}