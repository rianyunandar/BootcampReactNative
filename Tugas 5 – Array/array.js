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



console.log("jawaban 4")

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
] 


function dataHandling(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(" ");
        console.log("Nomor ID : " + arr[i][0]);
        console.log("Nama Lengkap : " + arr[i][1]);
        console.log("TTL: " + arr[i][2] + ' ' + arr[i][3]);
        console.log("Hobi: " + arr[i][4]);
        
    }
    return " ";
}

console.log(dataHandling(input));

//SOAL 5
console.log("jawaban 5")

function balikKata(text) {
    var textAsli = text;
    var textBalik = '';
    for (var i = text.length - 1; i >= 0; i--) {
        textBalik = textBalik + textAsli[i];
    }
    return textBalik;
}

console.log(balikKata("Kasur Rusak"));
console.log(balikKata("SanberCode"));
console.log(balikKata("Haji Ijah"));
console.log(balikKata("racecar"));
console.log(balikKata("I am Sanbers"));

//SOAL 6
console.log("jawaban 6")

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(arr) {
    console.log("OUTPUT ke-1")
    arr.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
    console.log(arr);

    console.log("OUTPUT ke-2")
    var slipted = arr[3].split("/");
    switch(slipted[1]) {
        case '01': {
            console.log('Januari');
            break;
        }
        case '02': {
            console.log('Februari');
            break;
        }
        case '03': {
            console.log('Maret');
            break;
        }
        case '04': {
            console.log('April');
            break;
        }
        case '05': {
            console.log('Mei');
            break;
        }
        case '06': {
            console.log('Juni');
            break;
        }
        case '07': {
            console.log('Juli');
            break;
        }
        case '08': {
            console.log('Agustus');
            break;
        }
        case '09': {
            console.log('September');
            break;
        }
        case '10': {
            console.log('Oktober');
            break;
        }
        case '11': {
            console.log('November');
            break;
        }
        case '12': {
            console.log('Desember');
            break;
        }
        default: {
            console.log('Bulan salah')
        }
    }
    
    console.log("OUTPUT ke-3")
    var sorted = slipted.sort(function(a, b) {
        return b - a;
    });
    console.log(sorted);

    console.log("OUTPUT ke-4")
    var slipted2 = arr[3].split("/");
    var combined = slipted2.join("-");
    console.log(combined);

    console.log("OUTPUT ke-5")
    var nama = arr[1].slice(0, 14);
    console.log(nama);
}

dataHandling2(input);