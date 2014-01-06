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
    
    it("should initialize new pieces the top", function(){
      tetris.initPiece()
      expect(tetris.board[0][4].active).toEqual(true)
    })

    it("should recieve a new piece object from init", function(){
      expect(tetris.initPiece()).toEqual(jasmine.any(Piece))
    })

    it("parses piece data for positioning", function(){
      testPiece = new Piece();
      tetris.parsePiece(testPiece);
      expect(tetris.board[0][4].active).toEqual(true)
    })

    xit("can drop a piece", function(){
      testPiece = tetris.initPiece();
      tetris.dropPiece(testPiece)
      expect(tetris.board[0][4].active).toBe(false)
      expect(tetris.board[1][4].active).toBe(true)
    })

  })
})