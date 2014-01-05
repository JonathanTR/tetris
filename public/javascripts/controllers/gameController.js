window.onload = function(){
  tetris = new TetrisGame();
  if (document.getElementById('tetrisBoard')) {
    render(tetris.board, 'tetrisBoard')
  }
}