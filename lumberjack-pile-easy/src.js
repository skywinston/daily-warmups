function pileLogs(gridSize, logCount, inventory){
  var count = logCount;
  var storage = [];
  var currentLowest = 0;
  for(var i = 0; i < gridSize; i++){
    var row = [];
    for (var j = 0; j < gridSize; j++) {
      row.push(inventory.shift(0));
    }
    storage.push(row);
  }
  // Why isn't this while loop breaking when count goes to 0 and below?
  while (count > 0){
    for (var i = 0; i < gridSize; i++) {
      for(var j = 0; j < gridSize; j++){
        if (storage[i][j] <= currentLowest) {
          console.log(storage[i][j]);
          storage[i][j]++;
          count--;
        }
      }
    }
    currentLowest++
  }
  return storage;
}


module.exports = pileLogs;
