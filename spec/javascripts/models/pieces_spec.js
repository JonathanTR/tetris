beforeEach(function(){
  testPiece = new Piece()
})

describe("Piece", function(){
  it("exists", function(){
    expect(testPiece).toBeTruthy()
  })

  describe("properties", function(){
    it("has a pattern", function(){
      console.log(testPiece.pattern)
      expect(testPiece.pattern).not.toBeFalsy()
    })

    xit("is initialized with a tetromino shape", function(){
      tetromino = new Piece(TETROMINOES.I)
      expect(tetromino.pattern).toEqual([[0, 4],[1, 4],[2, 4],[3, 4]])
    })
  })

  describe("position", function(){
    it("initializes with [0,4] as its origin coordinate", function(){
      expect(testPiece.origin).toBeDefined()
      expect(testPiece.origin).toEqual([0, 4])
    })

    it("can move down one row", function(){
      expect(testPiece.origin).toEqual([0, 4])
      testPiece.downOne()
      expect(testPiece.origin).toEqual([1, 4])
    })

    it("can move left one column", function(){
      expect(testPiece.origin).toEqual([0, 4])
      testPiece.leftOne()
      expect(testPiece.origin).toEqual([0, 3])
    })
    it("can move right one column", function(){
      expect(testPiece.origin).toEqual([0, 4])
      testPiece.rightOne()
      expect(testPiece.origin).toEqual([0, 5])
    })
  })
})
