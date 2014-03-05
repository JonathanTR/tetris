describe("Game Controller", function(){
  var tetris, board

  beforeEach(function(){
    tetris = new Game()
    board = tetris.board
    tetrisController = new GameController()
    $('body').append("<div id='tetrisBoard'></div>")
  })

  afterEach(function(){
    $("#tetrisBoard").remove()
  })

  describe("renderBoard", function(){
    it("should load an empty board", function(){
      spyOn(GameViews, "render")
      tetrisController.renderBoard()
      expect(GameViews.render).toHaveBeenCalledWith(board, "tetrisBoard")
    })
  })

  describe("initialize", function(){
    beforeEach(function(){
      $('body').append("<button id='start'></button>")
    })

    afterEach(function(){
      $('#start').remove()
    })

    it("should run renderBoard", function(){
      spyOn(tetrisController, "renderBoard")
      tetrisController.initialize()
      expect(tetrisController.renderBoard).toHaveBeenCalled()
    })

    it("should attach button handlers", function(){
      spyOn(tetrisController, "attachButtonHandlers")
      tetrisController.initialize()
      expect(tetrisController.attachButtonHandlers).toHaveBeenCalled()
    })
  })

  describe("Piece movement:", function(){
    beforeEach(function(){
      spyOn(GameViews, "render")
      spyOn(tetrisController.tetris, "activateTilesFor")
      spyOn(tetrisController.tetris, "deactivateTilesFor")
      tetrisController.createPiece(TETROMINOES.I)
      currentPiece = tetrisController.currentPiece
    })

    it("createPiece should create and activate a new piece", function(){
      expect(tetrisController.currentPiece).toEqual(new Piece(TETROMINOES.I))
      expect(tetrisController.tetris.activateTilesFor).toHaveBeenCalled()
      expect(GameViews.render).toHaveBeenCalled()
    })

    it("moveDown should drop the currentPiece", function(){
      spyOn(currentPiece, "downOne")
      tetrisController.moveDown()
      expect(tetrisController.tetris.deactivateTilesFor).toHaveBeenCalled()
      expect(currentPiece.downOne).toHaveBeenCalled()
      expect(tetrisController.tetris.activateTilesFor).toHaveBeenCalled()
      expect(GameViews.render).toHaveBeenCalled()
    })

    it("moveLeft should move the piece left one", function(){
      spyOn(currentPiece, "leftOne")
      tetrisController.moveLeft()
      expect(tetrisController.tetris.deactivateTilesFor).toHaveBeenCalled()
      expect(currentPiece.leftOne).toHaveBeenCalled()
      expect(tetrisController.tetris.activateTilesFor).toHaveBeenCalled()
      expect(GameViews.render).toHaveBeenCalled()
    })

    it("moveRight should move the piece right one", function(){
      spyOn(currentPiece, "rightOne")
      tetrisController.moveRight()
      expect(tetrisController.tetris.deactivateTilesFor).toHaveBeenCalled()
      expect(currentPiece.rightOne).toHaveBeenCalled()
      expect(tetrisController.tetris.activateTilesFor).toHaveBeenCalled()
      expect(GameViews.render).toHaveBeenCalled()
    })
  })

  describe("runGame", function(){
    beforeEach(function(){
      jasmine.clock().install()
    })

    afterEach(function(){
      jasmine.clock().uninstall()
    })

    it("should call createPiece", function(){
      spyOn(tetrisController, "createPiece")
      tetrisController.runGame()
      expect(tetrisController.createPiece).toHaveBeenCalled()
    })

    it("dropping should keep dropping the currentPiece", function(){
      tetrisController.createPiece(TETROMINOES.I)
      currentPiece = tetrisController.currentPiece
      expect(currentPiece.frozen).toBe(false)
      tetrisController.dropping()
      // The board length may need to be extended to 22 rows to form a two row "skirt"
      ticks = (board.length - 2)
      jasmine.clock().tick(ticks * 500)
      expect(currentPiece.frozen).toBe(true)
    })
  })

})