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

  describe("loadEmptyBoard", function(){

    it("should load an empty board", function(){
      spyOn(GameViews, "render")
      tetrisController.loadEmptyBoard()
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

    it("should run loadEmptyBoard", function(){
      spyOn(tetrisController, "loadEmptyBoard")
      tetrisController.initialize()
      expect(tetrisController.loadEmptyBoard).toHaveBeenCalled
    })

    it("should attach button handlers", function(){
      spyOn(tetrisController, "attachButtonHandlers")
      tetrisController.initialize()
      expect(tetrisController.attachButtonHandlers).toHaveBeenCalled
    })
  })

})