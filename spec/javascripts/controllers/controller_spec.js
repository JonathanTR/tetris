describe("Game Controller", function(){

  describe("LoadEmptyBoard", function(){
    var tetris, board

    beforeEach(function(){
      tetris = new Game()
      board = tetris.board
    })

    it("should load an empty board", function(){
      spyOn(GameViews, "render")
      GameController.loadEmptyBoard();
      expect(GameViews.render).toHaveBeenCalledWith(board, "tetrisBoard")
    })
  })

})