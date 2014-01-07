beforeEach(function(){
  tetris = new Game()
})

describe("TetrisBoard", function(){
  it("should have 20 rows", function(){
    var height = tetris.board.length
    expect(height).toBe(20)
  })

  it("should have 10 columns", function(){
    var width = tetris.board[0].length
    expect(width).toBe(10)
  })

  it("should be filled with tiles", function(){
    expect(tetris.board[5][5]).toEqual(jasmine.any(Tile))
  })

  describe("Gameplay:", function(){

    beforeEach(function(){
      testPiece = new Piece(TETROMINOES.I);
    })

    it("can activate tiles, given a piece", function(){
      tetris.activateTilesFor(testPiece);
      expect(tetris.board[0][4].active).toEqual(true)
    })

    it("can deactivate tiles, given a piece", function(){
      tetris.activateTilesFor(testPiece);
      tetris.deactivateTilesFor(testPiece);
      expect(tetris.board[0][4].active).toEqual(false)
    })

  })
})