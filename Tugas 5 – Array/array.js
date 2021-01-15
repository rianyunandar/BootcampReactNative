console.log("jawaban 1")



function range(startNum,finishNum) {
    var result = []
    var x
    
     if (startNum < finishNum) {
        for ( x = startNum; x <= finishNum; x++) {
            result.push(x);
        }
    }
    else if (startNum>finishNum) {
        for (var x = startNum; x >= finishNum; x--) {
            result.push(x);
        }
    }
    else if (startNum=null || finishNum == null) {
        return -1
    }
    return result;
}



console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1 


console.log("jawaban 2")

function rangeWithStep(startNum,finishNum,step) {
    var resultWithStep = []
    var y
    

   

    if (startNum < finishNum) {
        for ( y = startNum; y <= finishNum; y+= step) {
            resultWithStep.push(y);
        }
    }
    else if (startNum>finishNum) {
        for ( y = startNum; y >= finishNum; y-= step) {
            resultWithStep.push(y);
        }
    }
    
  
    return resultWithStep;
}

console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 



console.log("jawaban 3")

function sum(startNum, finishNum, step) {
    var resultSum = [];
    var stepp =1;
    if (startNum === undefined) {
        return 0;
      } 
      else if (finishNum === undefined) {
        return startNum;
      } 
      step = (arguments[2] || 1);

      if (startNum < finishNum) {
        for ( y = startNum; y <= finishNum; y+= step) {
            resultSum.push(y);
        }
    }
    else if (startNum>finishNum) {
        for ( y = startNum; y >= finishNum; y-= step) {
            resultSum.push(y);
        }
    }

        return resultSum.reduce ((a, b) => a + b, 0);
}

console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 