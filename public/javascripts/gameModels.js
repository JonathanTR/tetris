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
Piece = function(){
  this.origin = [0, 4]
}
Piece.prototype.downOne = function(){
  this.origin[0] +=1
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
Game.prototype.drop = function(piece){
  this.deactivateTilesFor(piece)
  piece.downOne()
  this.activateTilesFor(piece)
}