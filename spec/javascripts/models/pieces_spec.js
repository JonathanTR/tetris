describe("Piece", function(){
  it("exists", function(){
    expect(new Piece()).toBeTruthy()
  })

  describe("position", function(){
    it("initializes with [0,4] as its origin coordinate", function(){
      pieceTester = new Piece()
      expect(pieceTester.origin).toBeDefined()
      expect(pieceTester.origin).toEqual([0,4])
    })
  })

  xit("can be dropped", function(){
    drop(piece)       
  })
})
