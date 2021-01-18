var input1= [["Abduh", "Muhamad", "male", 1992], ["Ahmad", "Taufik", "male", 1985]]


function getPersons(arr){
    var personObj ={}
    var now = new Date()
    var thisYear = now.getFullYear() // 2020 (tahun sekarang)

    for (var i = 0; i < arr.length; i++) {
        console.log(i+1 +".  "+ arr[i][0] +" "+arr[i][1] + " : "  );
        personObj.firstname= arr[i][0],
        personObj.lastName= arr[i][1],
        personObj.Sex= arr[i][2],
        personObj.Age= thisYear - arr[i][3]
       
        console.log(personObj)
    }
}

getPersons(input1)