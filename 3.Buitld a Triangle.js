function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
      line += "* "
    }
    return line + "\n";
  }
  /*You will need to call this makeLine() function in buildTriangle(). */

  function buildTriangle(num){
      var triangle = "";
      for(var x =1; x<num;x++){
          triangle = triangle + makeLine(x);
      }
      return triangle;

  }
  console.log(buildTriangle(10));