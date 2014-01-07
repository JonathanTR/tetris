// Start the party
loadUp = function(){
  tetris = new Game()
  piece = new Piece(randomTetromino())
  tetris.activateTilesFor(piece)
  render(tetris.board, 'tetrisBoard')
}