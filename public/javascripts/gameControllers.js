run = function(){
  var tetris = new Game()
  var board = tetris.board
  var currentPiece
  
  renderBoard = function(){
    render(tetris.board, 'tetrisBoard')
  }
  initPiece = function(){
    currentPiece = new Piece(randomTetromino())
    tetris.activateTilesFor(currentPiece)
    renderBoard()
  }
  
  deactivateBoard = function(){
    for(var row = 0; row < board.length; row++){
      for(var tile = 0; tile < board[row].length; tile++){
        board[row][tile].deactivate()
      }
    }
    renderBoard()
  }

  stopGame = function(){
    pause()
    currentPiece = undefined
  }

  gameHasBeenLost = function(){
    for(var coords = 0; coords < currentPiece.position.length; coords++){
      if(currentPiece.frozen && currentPiece.position[coords][0] <= 0){
        return true
      }else{
        return false
      }
    }
  }

  boardSweep = function(){
    for(var row = 0; row < board.length; row++){
      var activeTiles = 0
      for(var tile = 0; tile < board[row].length; tile++){
        if(board[row][tile].active){
          activeTiles++
        }
      }
      // If a row is full, clear it out
      if(activeTiles == 10){
        board.splice(row, 1)
        var newRow = []
        for(var i = 0; i < 10; i++){
          newRow.push(new Tile());
        }
        board.unshift(newRow)
      }
      if(gameHasBeenLost()){
        pause()
        window.alert('You lose')
      }
    }
  }
  
  dropPiece = function(){
    if(typeof(gameTime) != "undefined"){ 
      clearInterval(gameTime)
    }
    gameTime = setInterval(function(){
      boardSweep()
      tetris.deactivateTilesFor(currentPiece)
      currentPiece.downOne()
      tetris.activateTilesFor(currentPiece)
      renderBoard()
    }, 500)
  }

  pause = function(){
    if(typeof(gameTime) != "undefined"){ 
      clearInterval(gameTime)
    }
  }

  play = function(){
    if(typeof(currentPiece) != "undefined"){
      dropPiece()
    }else{
      startGame()
    }
  }

  fasterDrop = function(){
    tetris.deactivateTilesFor(currentPiece)
    currentPiece.downOne()
    tetris.activateTilesFor(currentPiece)
    renderBoard()
  }

  startGame = function(){
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

  document.addEventListener("pieceFrozen", startGame, false);
  document.getElementById('start').addEventListener("click", play, false);
  document.getElementById('pause').addEventListener("click", pause, false);
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
        fasterDrop()
        break
    }
  })
}

window.onload = function(){
  run()
}