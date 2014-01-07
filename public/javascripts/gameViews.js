clearBoard = function(handle){
  document.getElementById(handle).innerHTML = ''
}

render = function(board, handle){
  clearBoard(handle)
  var domBoard = document.getElementById(handle)
  var modelBoard = board
  for(var y = 0; y < modelBoard.length; y++){
    var row = document.createElement('div')
    row.setAttribute('class', 'row')
    for(var x = 0; x < modelBoard[y].length; x++){
      var modeltile = modelBoard[y][x]
      var tile = document.createElement('div')
      if(!modeltile.active){
        tile.setAttribute('class', 'tile')
      }else{
        tile.setAttribute('class', 'tile active')
      }
      row.appendChild(tile)
    }
    domBoard.appendChild(row)
  }
}