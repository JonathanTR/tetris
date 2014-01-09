beforeEach(function(){
  testPiece = new Piece(TETROMINOES.I)
  currentPosition = testPiece.position
})

describe("Piece", function(){
  it("exists", function(){
    expect(testPiece).toBeTruthy()
  })

  describe("properties", function(){
    it("has a pattern", function(){
      expect(currentPosition).not.toBeFalsy()
    })

    it("is initialized with the first position of a tetromino shape", function(){
      expect(currentPosition).toEqual([[1, 3],[1, 4],[1, 5],[1, 6]])
    })

    it("changes to piece's pattern do not affect TETROMINOES constant", function(){
      currentPosition[0][0] += 1
      expect(TETROMINOES.I.positions[0][0][0]).toEqual(1)
    })
  })

  describe("position", function(){
    it("initializes with [0,4] as its origin coordinate", function(){
      expect(testPiece.origin).toBeDefined()
      expect(testPiece.origin).toEqual([0, 4])
    })

    it("can move down one row", function(){
      testPiece.downOne()
      expect(currentPosition).toEqual([[2, 3],[2, 4],[2, 5],[2, 6]])
    })

    it("can move left one column", function(){
      testPiece.leftOne()
      expect(currentPosition).toEqual([[1, 2],[1, 3],[1, 4],[1, 5]])
    })

    it("can move right one column", function(){
      testPiece.rightOne()
      expect(currentPosition).toEqual([[1, 4],[1, 5],[1, 6],[1, 7]])
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
      expect(currentPosition).toEqual(TETROMINOES.I.positions[0])
    })
  })

  describe("rotation", function(){
    it("rotates 90 degrees", function(){
      newTestPiece = new Piece(TETROMINOES.J)
      newTestPiece.rotate()
      expect(newTestPiece.position).toEqual(TETROMINOES.J.positions[1])
      newTestPiece.rotate()
      expect(newTestPiece.position).toEqual(TETROMINOES.J.positions[2])
    })

    it("should adjust all rotations when moving down", function(){
      testPiece.downOne()
      expect(testPiece.pattern.positions[1]).toEqual([[1,5],[2,5],[3,5],[4,5]])
    })

    it("should adjust all rotations when moving left", function(){
      testPiece.leftOne()
      expect(testPiece.pattern.positions[1]).toEqual([[0,4],[1,4],[2,4],[3,4]])
    })
  })
})
