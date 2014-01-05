beforeEach(function(){
  tetris = new TetrisGame()
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
    
    it("should start a new piece at the top", function(){
      tetris.startPiece()
      console.log(tetris.board[0][1])
      expect(tetris.board[0][1].active).toBe(true)
    })

    

  })
})