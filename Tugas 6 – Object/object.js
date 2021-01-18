// Soal No. 1 (Array to Object)
console.log("Soal No. 1 (Array to Object)")

var people0  = [
    ["Abduh", "Muhamad", "male", 1992],
    ["Ahmad", "Taufik", "male", 1985]
]

var people1 = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]


function arrayToObject(arr) {
    var personObj = {}
    var now = new Date()
    var thisYear = now.getFullYear() // 2020 (tahun sekarang)

    if (arr[0] === undefined) {
        console.log(" ");
    }

    for (var i = 0; i < arr.length; i++) {
        console.log(i + 1 + ".  " + arr[i][0] + " " + arr[i][1] + " : ");
        personObj.firstname = arr[i][0],
            personObj.lastName = arr[i][1],
            personObj.Gender = arr[i][2]

        if (arr[i][3] == undefined) {
            personObj.Age = 'Invalid birth year'
        } else if (arr[i][3] > thisYear) {
            personObj.Age='Invalid birth year '
        }
        else{
        personObj.Age = thisYear - arr[i][3]}
        console.log(personObj)
    }
}

arrayToObject(people0 )
arrayToObject(people1)
arrayToObject(people2)  
// Error case 
arrayToObject([]) // ""

console.log("-----------------------------------------------------------------------------")

console.log(" Soal No. 2 (Shopping Time)")


function shoppingTime(memberId, money) {
    // you can only write your code here!
    var itemBelanja = ["Sepatu Stacattu",
    "Baju Zoro",
    "Baju H&N",
    "Sweater Uniklooh",
    "Casing Handphone"]

    if (memberId===undefined || memberId==="") {
        return("Mohon maaf, toko X hanya berlaku untuk member saja")
    }
    else if (money <= 50000)
    {return("Mohon maaf, uang tidak cukup")}

    else{
    var belanjaTross={}
    
    
    belanjaTross.memberId=memberId;
    belanjaTross.money=money;

    var ItemPurcashed=[]
    for (var i = 0; i < itemBelanja.length; i++) {
        if(money >= 1500000){
            ItemPurcashed.push(itemBelanja[0])
            money-=1500000
        }
        else if (money >= 500000){
            ItemPurcashed.push(itemBelanja[1])
            money-=500000
        }
        else if (money >= 250000){
            ItemPurcashed.push(itemBelanja[2])
            money-=250000
        }
        else if (money >= 175000){
            ItemPurcashed.push(itemBelanja[3])
            money-=175000
        }
        else if (money >= 50000){
            ItemPurcashed.push(itemBelanja[3])
            money-=50000
        }
        belanjaTross.listPurchased=ItemPurcashed
        belanjaTross.changeMoney=money

    }

    
return belanjaTross;
  }
}
   
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
  console.log(shoppingTime('82Ku8Ma742', 170000));
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja



console.log("-----------------------------------------------------------------------------");
