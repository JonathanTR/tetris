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
      expect(testPiece.pattern).toEqual([[1, 3],[1, 4],[1, 5],[1, 6]])
    })

    it("changes to piece's pattern do not affect TETROMINOES constant", function(){
      testPiece.pattern[0][0] += 1
      expect(TETROMINOES.I[0][0]).toEqual(1)
    })
  })

  describe("position", function(){
    it("initializes with [0,4] as its origin coordinate", function(){
      expect(testPiece.origin).toBeDefined()
      expect(testPiece.origin).toEqual([0, 4])
    })

    it("can move down one row", function(){
      testPiece.downOne()
      expect(testPiece.pattern).toEqual([[2, 3],[2, 4],[2, 5],[2, 6]])
    })

    it("can move left one column", function(){
      testPiece.leftOne()
      expect(testPiece.pattern).toEqual([[1, 2],[1, 3],[1, 4],[1, 5]])
    })

    it("can move right one column", function(){
      testPiece.rightOne()
      expect(testPiece.pattern).toEqual([[1, 4],[1, 5],[1, 6],[1, 7]])
    })

    it("can be frozen", function(){
      expect(testPiece.frozen).toBe(false)
      testPiece.freeze()
      expect(testPiece.frozen).toBe(true)
    })

    it("cannot move if it is frozen", function(){
      testPiece.freeze()
      testPiece.downOne()
      testPiece.leftOne()
      testPiece.rightOne()
      expect(testPiece.pattern).toEqual(TETROMINOES.I)
    })
  })
})
