var GameController = function(){
  this.tetris = new Game(),
  this.board = this.tetris.board
  this.currentPiece
}

GameController.prototype.renderBoard = function(){
  GameViews.render(this.board, 'tetrisBoard')
}

GameController.prototype.pause = function(){
  clearInterval(gameTime)
  gameTime = undefined
}

GameController.prototype.attachButtonHandlers = function(){
  var startButton = document.getElementById('start')
  var pauseButton = document.getElementById('pause')
  var _this = this
  startButton.addEventListener("click", function(){
    if(typeof _this.currentPiece === 'undefined'){
      _this.createPiece(randomTetromino())
    }
    _this.dropping()
  })
  pauseButton.addEventListener("click", function(){
    _this.pause()
  })
}

GameController.prototype.attachKeyHandlers = function(){
  var _this = this
  document.addEventListener("keydown", function(e){
    if(e.keyCode == 37){
      _this.moveLeft()
    }
    if(e.keyCode == 39){
      _this.moveRight()
    }
    if(e.keyCode == 40){
      _this.moveDown()
    }
    if(e.keyCode == 38){
      _this.rotate()
    }
  })
}

GameController.prototype.attachPieceFrozenListener = function(){
  var _this = this
  document.addEventListener("pieceFrozen", function(){
    setTimeout(function(){
      _this.createPiece(randomTetromino())
    }, 300)
  })
}

GameController.prototype.initialize = function(){
  this.renderBoard()
  this.attachButtonHandlers()
  this.attachKeyHandlers()
  this.attachPieceFrozenListener()
}

GameController.prototype.createPiece = function(pattern){
  this.tetris.clearFilledRows()
  this.currentPiece = new Piece(pattern)
  this.tetris.activateTilesFor(this.currentPiece)
  this.renderBoard()
}

GameController.prototype.moveDown = function(){
  this.tetris.deactivateTilesFor(this.currentPiece)
  this.currentPiece.downOne()
  this.tetris.activateTilesFor(this.currentPiece)
  this.renderBoard()
}

GameController.prototype.moveLeft = function(){
  this.tetris.deactivateTilesFor(this.currentPiece)
  this.currentPiece.leftOne()
  this.tetris.activateTilesFor(this.currentPiece)
  this.renderBoard()
}

GameController.prototype.moveRight = function(){
  this.tetris.deactivateTilesFor(this.currentPiece)
  this.currentPiece.rightOne()
  this.tetris.activateTilesFor(this.currentPiece)
  this.renderBoard()
}

GameController.prototype.rotate = function(){
  this.tetris.deactivateTilesFor(this.currentPiece)
  this.currentPiece.rotate()
  this.tetris.activateTilesFor(this.currentPiece)
  this.renderBoard()
}

GameController.prototype.dropping = function(){
  var _this = this
  gameTime = setInterval(function(){
    _this.moveDown()
  }, 500)
}