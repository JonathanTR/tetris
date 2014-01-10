run = function(){
  var tetris = new Game()
  var currentPiece
  
  renderBoard = function(){
    render(tetris.board, 'tetrisBoard')
  }
  initPiece = function(){
    currentPiece = new Piece(randomTetromino())
    tetris.activateTilesFor(currentPiece)
    renderBoard()
  }
  dropPiece = function(){
    if(typeof(gameTime) != "undefined"){ 
      clearInterval(gameTime)
    }
    gameTime = setInterval(function(){
      tetris.deactivateTilesFor(currentPiece)
      currentPiece.downOne()
      tetris.activateTilesFor(currentPiece)
      renderBoard()
    }, 500)
  }

  fasterDrop = function(){
    tetris.deactivateTilesFor(currentPiece)
    currentPiece.downOne()
    tetris.activateTilesFor(currentPiece)
    renderBoard()
  }

  initAndDropPiece = function(){
    initPiece()
    dropPiece()
  }

  moveLeft = function(){
    clearInterval(gameTime)
    tetris.deactivateTilesFor(currentPiece)
    currentPiece.leftOne()
    tetris.activateTilesFor(currentPiece)
    renderBoard()
    dropPiece()
  }
  moveRight = function(){
    clearInterval(gameTime)
    tetris.deactivateTilesFor(currentPiece)
    currentPiece.rightOne()
    tetris.activateTilesFor(currentPiece)
    renderBoard()
    dropPiece()
  }
  moveRotate = function(){
    clearInterval(gameTime)
    tetris.deactivateTilesFor(currentPiece)
    currentPiece.rotate()
    tetris.activateTilesFor(currentPiece)
    renderBoard()
    dropPiece()
  }

  renderBoard()

  document.addEventListener("pieceFrozen", initAndDropPiece, false);
  // document.getElementById('start-button').addEventListener("click", initAndDropPiece, false);
  document.addEventListener("keydown", function(event){
    switch(event.keyCode){
      case 37:
        moveLeft()
        break
      case 39:
        moveRight()
        break
      case 38:
        // Up
        moveRotate()
        break
      case 40:
        // Down
        console.log(event)
        fasterDrop()
        break
    }
  })
}

window.onload = function(){
  run()
}