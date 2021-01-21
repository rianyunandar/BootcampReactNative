console.log("--------------------------")

console.log("jawaban 1 - realease 0")
class Animal {
    constructor(name, legs = '4', cold_blooded = false) {
        this.name = name;
        this.legs = legs;
        this.cold_blooded = cold_blooded;
    }
    get animalName() {
        return this.name;
    }
    set animalName(str) {
        this.name = str;
    }
    get animalLegs() {
        return this.legs;
    }
    set animalLegs(str) {
        this.legs = str;
    }
    get coldBlooded() {
        return this.cold_blooded;
    }

}

var sheep = new Animal("shaun");
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

console.log("--------------------------")

console.log("jawaban 1 - realease 1")

class Ape extends Animal {
    constructor(name, legs, cold_blooded) {
        super(name, '2', false);
    }
    yell() {
        return console.log(this.name + ' Auoo');
    }
}
//------------
class Frog extends Animal {
    constructor(name, legs, cold_blooded) {
        super(name, '4', false);
    }
    jump() {
        return console.log(this.name + ' Hop Hop');
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"

var kodok = new Frog("buduk")
kodok.jump() // "hop hop"


console.log("--------------------------")

console.log("jawaban 2")

class Clock {
    constructor({
        template
    }) {
        this.template = template;
    }

    render() {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop=()=> {
        clearInterval(this.timer);
    }

    start=()=> {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

var clock = new Clock({
    template: 'h:m:s'
});
clock.start();