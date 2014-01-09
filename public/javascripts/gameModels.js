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

// PIECE
Piece = function(tetrominoPattern){
  this.origin = [0, 4]
  this.pattern = JSON.parse(JSON.stringify(tetrominoPattern))
  this.position = this.pattern.positions[0]
  this.frozen = false
}
Piece.prototype.downOne = function(){
  if(!this.frozen){
    var length = this.position.length
    for(var coords = 0; coords < length; coords++){
      this.position[coords][0] += 1
    }
  }
}
Piece.prototype.leftOne = function(){
  if(!this.frozen){
    var length = this.position.length
    for(var coords = 0; coords < length; coords++){
      this.position[coords][1] -= 1
    }
  }
}
Piece.prototype.rightOne = function(){
  if(!this.frozen){
    var length = this.position.length
    for(var coords = 0; coords < length; coords++){
      this.position[coords][1] += 1
    }
  }
}
Piece.prototype.freeze = function(){
  this.frozen = true
}
Piece.prototype.rotate = function(){
  this.position = [[0, 5],[1, 5],[2, 5],[3, 5]]
}

// GAME
Game = function(){
  this.board = boardMaker(20, 10)
}
Game.prototype.activateTilesFor = function(piece){
  var board = this.board
  var length = piece.position.length
  for(var tile = 0; tile < length; tile++){
    var row = piece.position[tile][0]
    var col = piece.position[tile][1]
    board[row][col].activate()
  }
}
Game.prototype.deactivateTilesFor = function(piece){
  var board = this.board
  var length = piece.position.length
  for(var tile = 0; tile < length; tile++){
    var row = piece.position[tile][0]
    var col = piece.position[tile][1]
    board[row][col].deactivate()
  }
}