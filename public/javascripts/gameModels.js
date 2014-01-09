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
  S: [[0, 4],[0, 5],[1, 3],[1, 4]],
  T: [[0, 4],[1, 3],[1, 4],[1, 5]],
  Z: [[0, 3],[0, 4],[1, 4],[1, 5]],
}

randomTetromino = function(){
  var keys = Object.keys(TETROMINOES)
  var index = Math.floor(Math.random() * keys.length)
  return TETROMINOES[keys[index]]
}

Piece = function(tetrominoPattern){
  this.origin = [0, 4]
  this.pattern = JSON.parse(JSON.stringify(tetrominoPattern))
}
Piece.prototype.downOne = function(){
  var length = this.pattern.length
  for(var coords = 0; coords < length; coords++){
    this.pattern[coords][0] += 1
  }
}
Piece.prototype.leftOne = function(){
  var length = this.pattern.length
  for(var coords = 0; coords < length; coords++){
    this.pattern[coords][1] -= 1
  }
}
Piece.prototype.rightOne = function(){
  var length = this.pattern.length
  for(var coords = 0; coords < length; coords++){
    this.pattern[coords][1] += 1
  }
}

// GAME
Game = function(){
  this.board = boardMaker(20, 10)
}
Game.prototype.activateTilesFor = function(piece){
  var board = this.board
  var length = piece.pattern.length
  for(var tile = 0; tile < length; tile++){
    var row = piece.pattern[tile][0]
    var col = piece.pattern[tile][1]
    board[row][col].activate()
  }
}
Game.prototype.deactivateTilesFor = function(piece){
  var board = this.board
  var length = piece.pattern.length
  for(var tile = 0; tile < length; tile++){
    var row = piece.pattern[tile][0]
    var col = piece.pattern[tile][1]
    board[row][col].deactivate()
  }
}