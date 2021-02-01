colors = ["yellow", "red", "blue", "orange"]
let i = 0;

// while loop
while (colors[i]) {
    console.log(colors[i]);
    i++;
}
console.log("klaar")

// for loop
for (i = 0; i <= colors.length - 1; i++) {
    console.log(colors[i])
}
console.log("done")

// for each array methode

colors.forEach(element => console.log(element));

//  object loopen

let loopObject = {
    name: "Brigitte",
    age: 29,
    cat: "Ronin",
    partner: "Stefan",
    laptop: "MSI",
}

for (const i in loopObject) {
    console.log(`${i}: ${loopObject[i]}`);
}
