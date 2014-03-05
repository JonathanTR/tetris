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
}

GameController.prototype.attachButtonHandlers = function(){
  var startButton = document.getElementById('start')
  var _this = this
  startButton.addEventListener("click", function(){
    _this.runGame()
  })
}

GameController.prototype.initialize = function(){
  this.renderBoard()
  this.attachButtonHandlers()
}

GameController.prototype.createPiece = function(pattern){
  this.currentPiece = new Piece(pattern)
  this.tetris.activateTilesFor(this.currentPiece)
  this.renderBoard()
}