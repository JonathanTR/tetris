beforeEach(function(){
  testPiece = new Piece()
})

describe("Piece", function(){
  it("exists", function(){
    expect(testPiece).toBeTruthy()
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
