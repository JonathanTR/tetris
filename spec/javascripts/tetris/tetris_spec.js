describe("Tetris board", function(){
  var tetris = new TetrisGame();
  
  it("should have 20 rows", function(){
    var height = tetris.board.length;
    expect(height).toBe(20);
  });

  it("should have 10 columns", function(){
    var width = tetris.board[0].length;
    expect(width).toBe(10);
  });
});

