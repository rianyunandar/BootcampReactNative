var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 


function iqro(time,books,i){
    if (i < books.length){
        readBooksPromise(time,books[i]).then (function (timeout){
            if (timeout>0){
                i++;
                iqro(timeout, books, i)
            }
            // else{
            //     console.log("udah istirahat ")
            // }

        }).catch(function(err){
            if (err){
                console.log("Error Inputan")
            }
        })
    }
}

iqro(10000,books,0)

