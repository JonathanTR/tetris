describe("Game Controller", function(){
  var tetris, board

  beforeEach(function(){
    tetris = new Game()
    board = tetris.board
    tetrisController = new GameController()
  })

  describe("loadEmptyBoard", function(){

    it("should load an empty board", function(){
      spyOn(GameViews, "render")
      tetrisController.loadEmptyBoard();
      expect(GameViews.render).toHaveBeenCalledWith(board, "tetrisBoard")
    })

  })

})