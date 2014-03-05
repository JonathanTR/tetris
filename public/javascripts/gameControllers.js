var GameController = function(){
  this.tetris = new Game(),
  this.board = this.tetris.board
  this.currentPiece
}

GameController.prototype.renderBoard = function(){
  GameViews.render(this.board, 'tetrisBoard')
}

GameController.prototype.runGame = function(){
  this.createPiece(randomTetromino())
  this.dropping()
}

GameController.prototype.attachButtonHandlers = function(){
  var startButton = document.getElementById('start')
  var _this = this
  startButton.addEventListener("click", function(){
    _this.runGame()
  })
}

GameController.prototype.attachKeyHandlers = function(){
  var _this = this
  document.addEventListener("keydown", function(e){
    if(e.keyCode == 37){
      _this.moveLeft()
    }
    if(e.keyCode == 39){
      _this.moveRight()
    }
    if(e.keyCode == 40){
      _this.moveDown()
    }
    if(e.keyCode == 38){
      _this.rotate()
    }
  })
}

GameController.prototype.initialize = function(){
  this.renderBoard()
  this.attachButtonHandlers()
  this.attachKeyHandlers()
}

GameController.prototype.createPiece = function(pattern){
  this.currentPiece = new Piece(pattern)
  this.tetris.activateTilesFor(this.currentPiece)
  this.renderBoard()
}

GameController.prototype.moveDown = function(){
  this.tetris.deactivateTilesFor(this.currentPiece)
  this.currentPiece.downOne()
  this.tetris.activateTilesFor(this.currentPiece)
  this.renderBoard()
}

GameController.prototype.moveLeft = function(){
  this.tetris.deactivateTilesFor(this.currentPiece)
  this.currentPiece.leftOne()
  this.tetris.activateTilesFor(this.currentPiece)
  this.renderBoard()
}

GameController.prototype.moveRight = function(){
  this.tetris.deactivateTilesFor(this.currentPiece)
  this.currentPiece.rightOne()
  this.tetris.activateTilesFor(this.currentPiece)
  this.renderBoard()
}

GameController.prototype.rotate = function(){
  this.tetris.deactivateTilesFor(this.currentPiece)
  this.currentPiece.rotate()
  this.tetris.activateTilesFor(this.currentPiece)
  this.renderBoard()
}

GameController.prototype.dropping = function(){
  var _this = this
  setInterval(function(){
    _this.moveDown()
  }, 500)
}