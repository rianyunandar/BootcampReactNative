console.log('jawaban 1')
console.log('Looping Pertama')

for (var x = 2; x < 21; x += 2) {
    console.log(x + '- I love coding');
}

console.log('Looping KeDua');

for (var x = 20; x > 0; x -= 2) {
    console.log(x + '- I will become a frontend developer');
}

console.log("-----")
console.log('jawaban 2')
for (var i = 1; i <= 20; i++) {
    if (i % 2 == 0)
        console.log(i + "- berkualitas");
    else if (i % 3 == 0)
        console.log(i + "- I Love Coding");
    else
        console.log(i + "- Santai");
}

// soal 3
console.log("---jawaban 3----")
for (var i = 1; i <= 4; i++) {
    var x = "";
    for (var j = 1; j <= 8; j++) {
        x = x + '#';
    }
    console.log(x);
}

// soal 4
console.log("---jawaban 4----")
for (var i = 1; i <= 7; i++) {
    var x = "";
    for (var j = 1; j <= i; j++) {
        x = x + '#';
    }
    console.log(x);
}

console.log("---jawaban 5----")
for (var i = 1; i <= 8; i++) {
    var x = "";
    for (var j = 1; j <= 8; j++) {
        if ((i + j) % 2 == 0) {
            x += ' ';
        } else {
            x += '#';
        }

    }
    console.log(x);
}