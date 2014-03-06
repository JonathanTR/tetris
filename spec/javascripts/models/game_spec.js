// Helpers
Piece.prototype.capturePosition = function() {
  return JSON.parse(JSON.stringify(this.position))
}
//

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

    it("can remove a row of tiles", function(){
      var b = tetris.board.length - 1 // should return y value for bottom of the board
      var fillBottom = new Piece({positions:[[[b,0],[b,1],[b,2],[b,3],[b,4],[b,5],[b,6],[b,7],[b,8],[b,9]]]})
      tetris.activateTilesFor(fillBottom)
      tetris.clearFilledRows()
      expect(tetris.board[b][0].active).toEqual(false)
      expect(tetris.board[b][5].active).toEqual(false)
      expect(tetris.board[b][9].active).toEqual(false)
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

        it("should not leftFreeze active tiles as part of its shape", function(){
          newTPiece = new Piece(TETROMINOES.T)
          newTPiece.rotate()
          tetris.activateTilesFor(newTPiece)
          newTPiece.rotate()
          tetris.activateTilesFor(newTPiece)
          expect(newTPiece.leftFrozen).toBe(false)
        })

        it("should not rightFreeze active tiles as part of its shape", function(){
          newTPiece = new Piece(TETROMINOES.T)
          newTPiece.rotate()
          tetris.activateTilesFor(newTPiece)
          newTPiece.rotate()
          tetris.activateTilesFor(newTPiece)
          expect(newTPiece.rightFrozen).toBe(false)
        })

        it("should not be leftFrozen unless it is directly next to a wall or active tile", function(){
          for(var col = 0; col < 3; col++){
            testPiece.leftOne()
          }
          tetris.activateTilesFor(testPiece)
          expect(testPiece.leftFrozen).toBe(true)
          tetris.deactivateTilesFor(testPiece)
          testPiece.rightOne()
          tetris.activateTilesFor(testPiece)
          expect(testPiece.leftFrozen).toBe(false)
        })

        it("should not be rightFrozen unless it is directly next to a wall or active tile", function(){
          for(var col = 0; col < 3; col++){
            testPiece.rightOne()
          }
          tetris.activateTilesFor(testPiece)
          expect(testPiece.rightFrozen).toBe(true)
          tetris.deactivateTilesFor(testPiece)
          testPiece.leftOne()
          tetris.activateTilesFor(testPiece)
          expect(testPiece.rightFrozen).toBe(false)
        })

        it("should not allow a piece to rotate over the left side", function(){
          testPiece.rotate()
          for(var col = 0; col < 4; col++){
            testPiece.leftOne()
          }
          control = testPiece.capturePosition()
          testPiece.rotate()
          expect(testPiece.position).toEqual(control)
        })

        it("should not allow a piece to rotate over the right side", function(){
          testPiece.rotate()
          for(var col = 0; col < 4; col++){
            testPiece.rightOne()
          }
          control = testPiece.capturePosition()
          testPiece.rotate()
          expect(testPiece.position).toEqual(control)
        })
      })
    })
  })
})