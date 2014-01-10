beforeEach(function(){
  tetris = new Game()
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

    beforeEach(function(){
      testPiece = new Piece(TETROMINOES.I);
    })

    describe("tile activation", function(){
      it("can activate tiles, given a piece", function(){
        tetris.activateTilesFor(testPiece);
        expect(tetris.board[1][3].active).toEqual(true)
        expect(tetris.board[1][4].active).toEqual(true)
        expect(tetris.board[1][5].active).toEqual(true)
        expect(tetris.board[1][6].active).toEqual(true)
      })

      it("can deactivate tiles, given a piece", function(){
        tetris.activateTilesFor(testPiece);
        tetris.deactivateTilesFor(testPiece);
        expect(tetris.board[0][4].active).toEqual(false)
        expect(tetris.board[1][4].active).toEqual(false)
        expect(tetris.board[2][4].active).toEqual(false)
        expect(tetris.board[3][4].active).toEqual(false)
      })
    })

    describe("when a piece bumps into anther, it", function(){
      it("should freeze a piece if it hits bottom", function(){
        for(var row = 2; row < tetris.board.length; row++){
          testPiece.downOne()
        }
        tetris.activateTilesFor(testPiece)
        expect(testPiece.frozen).toBe(true)
      })

      it("should leftFreeze a piece if it hits the left wall", function(){
        for(var col = 0; col < 3; col++){
          testPiece.leftOne()
        }
        tetris.activateTilesFor(testPiece)
        expect(testPiece.leftFrozen).toBe(true)
      })

      it("should rightFreeze a piece if it hits the right wall", function(){
        for(var col = 0; col < 3; col++){
          testPiece.rightOne()
        }
        tetris.activateTilesFor(testPiece)
        expect(testPiece.rightFrozen).toBe(true)
      })

      it("should freeze a piece if it lands on an active tile", function(){
        tetris.board[3][3].activate()
        testPiece.downOne()
        tetris.activateTilesFor(testPiece)
        expect(testPiece.frozen).toBe(true)
      })

      it("should leftFreeze a piece if it touches an active tile on the side", function(){
        tetris.board[1][2].activate()
        tetris.activateTilesFor(testPiece)
        testPiece.leftOne()
        expect(testPiece.position).toEqual(TETROMINOES.I.positions[0])
      })

      it("should rightFreeze a piece if it touches an active tile on the side", function(){
        tetris.board[1][7].activate()
        tetris.activateTilesFor(testPiece)
        testPiece.rightOne()
        expect(testPiece.position).toEqual(TETROMINOES.I.positions[0])
      })

      describe("but it", function(){
        it("should not freeze active tiles as part of its shape", function(){
          newTPiece = new Piece(TETROMINOES.T)
          newTPiece.rotate()
          tetris.activateTilesFor(newTPiece)
          newTPiece.rotate()
          tetris.activateTilesFor(newTPiece)
          expect(newTPiece.frozen).toBe(false)
        })
      })
    })
  })
})