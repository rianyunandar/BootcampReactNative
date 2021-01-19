//soal 1
const golden = ()=>{
    console.log("this is golden!!")
  }
   
  golden()
  console.log("------------------------------------------")
//soal 2
  const newFunction = (firstName, lastName) => {
    return {
      firstName,
      lastName,
      fullName: () => {
        console.log(`${firstName} ${lastName}`)
      }
    }
  }
  
  newFunction("William", "Imoh").fullName()
  console.log("------------------------------------------")
//soal 3
  const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }
  
// es5
//   const firstName = newObject.firstName;
//   const lastName = newObject.lastName;
//   const destination = newObject.destination;
//   const occupation = newObject.occupation;

const { firstName, lastName, destination, occupation, spell } = newObject


  // Driver code
  console.log(firstName, lastName, destination, occupation)
//console.log(firstName, lastName, destination, occupation, spell)

console.log("------------------------------------------")
//soal 4
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]

// const combined = west.concat(east)
//Driver Code

const combined = [...west, ...east]
console.log(combined)
console.log("------------------------------------------")
//soal 5
const planet = "earth"
const view = "glass"
// var before = 'Lorem ' + view + 'dolor sit amet, ' +  
//     'consectetur adipiscing elit,' + planet + 'do eiusmod tempor ' +
//     'incididunt ut labore et dolore magna aliqua. Ut enim' +
//     ' ad minim veniam'
var before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.` 

// Driver Code
console.log(before) 