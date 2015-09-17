function convertToGrade(arrayOfTestScores){
  var output = [];
  for (var i = 0; i < arrayOfTestScores.length; i++) {
    var grade = arrayOfTestScores[i];
    if(grade < 60){
      output.push('F');
    } else if (grade >= 60 && grade <= 70){
      output.push('D');
    } else if (grade > 70 && grade <=80){
      output.push('C');
    } else if (grade > 80 && grade <= 90){
      output.push('B');
    } else {
      output.push('A');
    }
  }
  return output;
}
console.log(convertToGrade([ 68, 74, 99, 45, 83, 95 ]));
