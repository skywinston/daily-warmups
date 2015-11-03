function squareSpirals(gridSize, locX, locY){
  if(gridSize % 2 === 0){return "Grid must be an odd number.";}
  var grid = createMatrix(gridSize);
  var origin = (gridSize+1)/2-1;

  if(arguments.length === 3){

  }
  if(arguments.length === 2){

  }

}

function createMatrix(gridSize){
  var possibleMoves = gridSize*gridSize;
  var moves = 0;
  var origin = (gridSize+1)/2-1;
  var currX = origin;
  var currY = origin;
  var matrix = [];
  for(var i = 0; i < gridSize; i++){
    var row = [];
    for(var j = 0; j < gridSize; j++){
      row.push(0);
    }
    matrix.push(row);
  }

  moves++;
  matrix[origin][origin] = moves;

  while(moves < possibleMoves){
    if(matrix[currY][currX]!== 0 && matrix[currY][currX+1] === 0){
      // move it right one position
    }
  }
  console.log(matrix);
  return matrix;
}

createMatrix(5);
// squareSpirals(5);
