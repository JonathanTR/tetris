describe("Tile", function(){
  it("initializes as inactive", function(){
    testTile = new Tile()
    expect(testTile.active).toBeFalse
  })
  it("can be activated", function(){
    testTile = new Tile()
    expect(testTile.active).toEqual(false)
    testTile.activate()
    expect(testTile.active).toEqual(true)
  })
})