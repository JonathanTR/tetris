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
      expect(testPiece.origin).toEqual([0,4])
    })

    it("can drop one level", function(){
      expect(testPiece.origin).toEqual([0,4])
      testPiece.dropOneLevel()
      expect(testPiece.origin).toEqual([1,4])
    })
  })
})
