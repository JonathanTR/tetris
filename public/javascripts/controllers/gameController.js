// driver = function(game){
//   piece = game.initPiece()
//   render(game.board, 'tetrisBoard')
//   game.dropPiece(piece)
//   render(game.board, 'tetrisBoard')
// }

window.onload = function(){
  tetris = new TetrisGame()
  if (document.getElementById('tetrisBoard')) {
    render(tetris.board, 'tetrisBoard')
  }
  driver(tetris)
}