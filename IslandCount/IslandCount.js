// scan the matrix cell-by-cell
// if you encounter a 1, use recursion to follow all it's adjacent 1 values
// mark all visited cells as 'seen'
// consider that process a 'hit' for an island
// scan the remaining unseen cells for the next unseen island. (go to 1).
function countIslands(mapStr) {
  // Make the map traversable
  let map = mapStr.split('\n');
  map.forEach(function(item, i) {
    map[i] = item.split('');
  });

  // Number of islands encountered
  let count = 0;

  // Island sinking machine (w/ location)
  function sink(y, x) {
    // Sink the given land
    map[y][x] = ".";

    // Search for connected land
    if (y - 1 >= 0 && map[y - 1][x] === '0') sink(y - 1, x);            // Up
    if (x + 1 < map[0].length && map[y][x + 1] === '0') sink(y, x + 1); // Right
    if (y + 1 < map.length && map[y + 1][x] === '0') sink(y + 1, x);    // Down
    if (x - 1 >= 0 && map[y][x - 1] === '0') sink(y, x - 1);            // Left
  }

  // Sail across the map
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      // If land is found...
      if (map[i][j] === '0') {
        // Log the island and sink it
        count++;
        sink(i, j);
      }
    }
  }

  // Report the number of islands
  return count;
}
