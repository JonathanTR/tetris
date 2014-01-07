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

// TILES
Tile = function(){
  this.active = false; 
};
Tile.prototype.activate = function(){
  this.active = true;
};
Tile.prototype.deactivate = function(){
  this.active = false;
}

// PIECES
const TETROMINOES = {
  I: [[0, 4],[1, 4],[2, 4],[3, 4]],
  J: [[0, 5],[1, 5],[2, 5],[2, 4]],
  L: [[0, 4],[1, 4],[2, 4],[2, 5]],
  O: [[0, 4],[0, 5],[1, 4],[1, 5]],
  S: [[0, 4],[0, 5],[1, 5],[1, 6]],
  T: [[1, 4],[1, 5],[1, 6],[0, 5]],
  Z: [[0, 5],[0, 6],[1, 4],[1, 5]],
}

Piece = function(){
  this.origin = [0, 4]
  this.pattern = []
}
Piece.prototype.downOne = function(){
  this.origin[0] += 1
}
Piece.prototype.leftOne = function(){
  this.origin[1] -= 1
}
Piece.prototype.rightOne = function(){
  this.origin[1] += 1
}

// GAME
Game = function(){
  this.board = boardMaker(20, 10)
}
Game.prototype.activateTilesFor = function(piece){
  var row = piece.origin[0]
  var col = piece.origin[1]
  this.board[row][col].activate()
}
Game.prototype.deactivateTilesFor = function(piece){
  var row = piece.origin[0]
  var col = piece.origin[1]
  this.board[row][col].deactivate()
}