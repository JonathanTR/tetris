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
      spyOn(tetrisController, "attachPieceFrozenListener")
      spyOn(tetrisController, "renderBoard")
      spyOn(tetrisController, "attachButtonHandlers")
      tetrisController.initialize()
    })

    afterEach(function(){
      $('#start').remove()
    })

    it("should run renderBoard", function(){
      expect(tetrisController.renderBoard).toHaveBeenCalled()
    })

    it("should attach button handlers", function(){
      expect(tetrisController.attachButtonHandlers).toHaveBeenCalled()
    })

    it("should attachPieceFrozenListener", function(){
      expect(tetrisController.attachPieceFrozenListener).toHaveBeenCalled()
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

    it("rotate should rotate the piece", function(){
      spyOn(currentPiece, "rotate")
      tetrisController.rotate()
      expect(tetrisController.tetris.deactivateTilesFor).toHaveBeenCalled()
      expect(currentPiece.rotate).toHaveBeenCalled()
      expect(tetrisController.tetris.activateTilesFor).toHaveBeenCalled()
      expect(GameViews.render).toHaveBeenCalled()
    })
  })

  describe("Gameplay:", function(){
    beforeEach(function(){
      jasmine.clock().install()
      tetrisController.createPiece(TETROMINOES.I)
      currentPiece = tetrisController.currentPiece
    })

    afterEach(function(){
      jasmine.clock().uninstall()
    })

    it("dropping should keep dropping the currentPiece", function(){
      expect(currentPiece.frozen).toBe(false)
      tetrisController.dropping()
      // The board length may need to be extended to 22 rows to form a two row "skirt"
      ticks = (board.length - 2)
      jasmine.clock().tick(ticks * 500)
      expect(currentPiece.frozen).toBe(true)
    })

    it("dispatches a custom event when a piece is frozen", function(){
      frozenEvent = spyOnEvent(document, "pieceFrozen")
      expect(currentPiece.frozen).toBe(false)
      tetrisController.dropping()
      ticks = (board.length - 2)
      jasmine.clock().tick(ticks * 500)
      expect(currentPiece.frozen).toBe(true)
      expect(frozenEvent).toHaveBeenTriggered()
    })
  })

})