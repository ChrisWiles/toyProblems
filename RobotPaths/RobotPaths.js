function robotPaths(n) {
   let board = makeBoard(n)
   let pathsFound = 0

   let search = function(x, y) {
      if (board[x] === undefined || board[x][y] === undefined) {
         return
      }

      if (board.hasBeenVisited(x, y)) {
         return
      }

      if (x === n - 1 && y === n - 1) {
         pathsFound += 1
         return
      }

      board[x][y] = true

      search(x, y - 1)
      search(x, y + 1)
      search(x - 1, y)
      search(x + 1, y)

      board[x][y] = false
   }

   search(0, 0)

   return pathsFound
}

function makeBoard(n) {
   var board = []
   for (var i = 0; i < n; i++) {
      board.push([])
      for (var j = 0; j < n; j++) {
         board[i].push(false)
      }
   }
   board.togglePiece = function(i, j) {
      this[i][j] = !this[i][j]
   }
   board.hasBeenVisited = function(i, j) {
      return !!this[i][j]
   }
   return board
}
