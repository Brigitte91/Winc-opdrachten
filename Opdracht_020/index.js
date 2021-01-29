let person = {
    name: "Brigitte",
    age: 29,
    evaluations: [7, 10, 9]
};

console.log(person)
console.log(person["name"])
console.log(person.age)
console.log(person.evaluations)

let lipstickColor = ["mauve", "red", "pink"]
console.log(lipstickColor)
console.log(lipstickColor.length)
console.log(lipstickColor[0])
console.log(lipstickColor[lipstickColor.length - 1])
lipstickColor.push("nude")
lipstickColor.push(1)
lipstickColor.push('{greeting: "Hi ik ben een object"}')
console.log(lipstickColor[lipstickColor.length - 1])