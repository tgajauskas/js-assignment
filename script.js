// Pirma užduotis

var legalAge = 20
var clientAge = 28

if (clientAge >= legalAge) {
    alert("Jūs esate pasiekę legal age.")
} else {
    alert("Jūs nesate pasiekę legal age.")
}

// Antra užduotis

var vardas = "Tomas"

if (vardas.lenght > 6) {
    console.log("Ilgas vardas")
} else {
    console.log("Trumpas vardas")
}

// Trečia užduotis

var manoAmzius = 28

if (manoAmzius < 0 || manoAmzius > 100) {
    console.log("Invalid age")
} else if (manoAmzius >= 1 && manoAmzius <= 18) {
    console.log("Child")
} else if (manoAmzius >= 19 && manoAmzius <= 99) {
    console.log("Adult")
} else {
    console.log("Invalid age")
}

// Ketvirta užduotis

car = "BMW"

if (["Audi", "Bentley", "Bugatti", "Lamborghini", "Porsche", "VW"].includes(car)) {
    console.log("Automobilis priklauso VW Group")
} else if (["BMW", "Mini", "Rolls-Royce"].includes(car)) {
    console.log("Automobilis priklauso BMW Group");
} else {
    console.log("Automobilis nepriklauso nei vienam group")
}