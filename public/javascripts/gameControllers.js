var GameController = function(){
  this.tetris = new Game(),
  this.board = this.tetris.board
}

GameController.prototype.loadEmptyBoard = function(){
  GameViews.render(this.board, 'tetrisBoard')
}