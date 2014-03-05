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
      tetrisController.loadEmptyBoard();
      expect(GameViews.render).toHaveBeenCalledWith(board, "tetrisBoard")
    })

  })

})