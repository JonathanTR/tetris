var GameController = {
  tetris: new Game(),
  loadEmptyBoard: function(){
    var board = this.tetris.board
    GameViews.render(board, 'tetrisBoard')
    console.log('loaded')
  }
}