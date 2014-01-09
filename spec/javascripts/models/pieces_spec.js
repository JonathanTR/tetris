beforeEach(function(){
  testPiece = new Piece(TETROMINOES.I)
})

describe("Piece", function(){
  it("exists", function(){
    expect(testPiece).toBeTruthy()
  })

  describe("properties", function(){
    it("has a pattern", function(){
      expect(testPiece.pattern).not.toBeFalsy()
    })

    it("is initialized with a tetromino shape", function(){
      expect(testPiece.pattern).toEqual([[0, 4],[1, 4],[2, 4],[3, 4]])
    })

    it("changes to piece's pattern do not affect TETROMINOES constant", function(){
      testPiece.pattern[0][0] += 1
      expect(TETROMINOES.I[0][0]).toEqual(0)
    })
  })

  describe("position", function(){
    it("initializes with [0,4] as its origin coordinate", function(){
      expect(testPiece.origin).toBeDefined()
      expect(testPiece.origin).toEqual([0, 4])
    })

    it("can move down one row", function(){
      testPiece.downOne()
      expect(testPiece.pattern).toEqual([[1, 4],[2, 4],[3, 4],[4, 4]])
    })

    it("can move left one column", function(){
      testPiece.leftOne()
      expect(testPiece.pattern).toEqual([[0, 3],[1, 3],[2, 3],[3, 3]])
    })

    it("can move right one column", function(){
      testPiece.rightOne()
      expect(testPiece.pattern).toEqual([[0, 5],[1, 5],[2, 5],[3, 5]])
    })
    it("can be frozen", function(){
      expect(testPiece.frozen).toBe(false)
      testPiece.freeze()
      expect(testPiece.frozen).toBe(true)
    })
  })
})
