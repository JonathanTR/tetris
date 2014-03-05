var GameController = function(){
  this.tetris = new Game(),
  this.board = this.tetris.board
  this.currentPiece
}

GameController.prototype.renderBoard = function(){
  GameViews.render(this.board, 'tetrisBoard')
}

GameController.prototype.runGame = function(){
  console.log("game started")
}

GameController.prototype.attachButtonHandlers = function(){
  var startButton = document.getElementById('start')
  startButton.addEventListener("click", this.runGame)
}

GameController.prototype.initialize = function(){
  this.renderBoard()
  this.attachButtonHandlers()
}

GameController.prototype.createPiece = function(pattern){
  this.currentPiece = new Piece(pattern)
  this.renderBoard()
}