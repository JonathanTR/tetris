// HELPERS

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

Array.prototype.rotate = function(){
  front = this.shift()
  this.push(front)
}

Array.prototype.containsCoords = function(coords){
  for(var i = 0; i < this.length; i++){
    if(this[i][0] == coords[0] && this[i][1] == coords[1] ){ return(true) }
  }
  return(false)
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
  this.leftFrozen = false
  this.rightFrozen = false
}
Piece.prototype.downOne = function(){
  if(!this.frozen){
    var outerLength = this.pattern.positions.length
    var innerLength = this.pattern.positions[0].length
    for(var rotation = 0; rotation < outerLength; rotation++){
      for(var coords = 0; coords < outerLength; coords++){
        this.pattern.positions[rotation][coords][0] += 1
      }
    }
  }
}
Piece.prototype.leftOne = function(){
  if(!this.frozen && !this.leftFrozen){
    var outerLength = this.pattern.positions.length
    var innerLength = this.pattern.positions[0].length
    for(var rotation = 0; rotation < outerLength; rotation++){
      for(var coords = 0; coords < outerLength; coords++){
        this.pattern.positions[rotation][coords][1] -= 1
      }
    }
  }
}
Piece.prototype.rightOne = function(){
  if(!this.frozen && !this.rightFrozen){
    var outerLength = this.pattern.positions.length
    var innerLength = this.pattern.positions[0].length
    for(var rotation = 0; rotation < outerLength; rotation++){
      for(var coords = 0; coords < outerLength; coords++){
        this.pattern.positions[rotation][coords][1] += 1
      }
    }
  }
}
Piece.prototype.rotate = function(){
  this.pattern.positions.rotate()
  this.position = this.pattern.positions[0]
}
Piece.prototype.freeze = function(){
  this.frozen = true
}
Piece.prototype.leftFreeze = function(){
  this.leftFrozen = true
}
Piece.prototype.rightFreeze = function(){
  this.rightFrozen = true
}
Piece.prototype.resetLeftRightFrozen = function(){
  this.leftFrozen = false
  this.rightFrozen = false
}

// GAME
Game = function(){
  this.board = boardMaker(20, 10)
}
Game.prototype.activateTilesFor = function(piece){
  piece.resetLeftRightFrozen()
  var board = this.board
  var length = piece.position.length
  for(var tile = 0; tile < length; tile++){
    var row = piece.position[tile][0]
    var col = piece.position[tile][1]
    if(row + 1 >= board.length || board[row + 1][col].active && !piece.position.containsCoords([row +1, col])){
      piece.freeze()
    }
    if(col - 1 < 0 || board[row][col - 1].active && !piece.position.containsCoords([row, col - 1])){
      piece.leftFreeze()
    }
    if(col + 1 > 9 || board[row][col + 1].active && !piece.position.containsCoords([row, col + 1])){
      piece.rightFreeze()
    }
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