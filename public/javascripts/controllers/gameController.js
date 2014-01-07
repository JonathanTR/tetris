window.onload = function(){
  tetris = new Game()
  if (document.getElementById('tetrisBoard')) {
    render(tetris.board, 'tetrisBoard')
  }
}