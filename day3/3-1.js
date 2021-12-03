let fs = require("fs");

let inputFile = 'input.txt';
let input = fs.readFileSync(inputFile, "utf8");
let data = input.split(/\r?\n/);

let gamma = "";
let epsilon = "";

for (let i = 0; i < data[0].length; i++) {
    let count1 = 0,
        count0 = 0;

    for (let j = 0; j < data.length; j++) {
        let bit = data[j][i];

        if (bit == "1") {
            count1++;
        } else {
            count0++;
        }
    }

    if (count1 > count0) {
        gamma += "1";
        epsilon += "0";
    } else {
        gamma += "0";
        epsilon += "1";
    }
}

gamma = parseInt(gamma, 2);
epsilon = parseInt(epsilon, 2);
console.log(gamma * epsilon);

generator = data;

for (let i = 0; i < generator[0].length; i++) {
    if (generator.length == 1) break;
    let count1 = 0,
        count0 = 0;

    for (let j = 0; j < generator.length; j++) {
        let bit = generator[j][i];

        if (bit == "1") {
            count1++;
        } else {
            count0++;
        }
    }

    if (count1 > count0 || count1 == count0) {
        generator = generator.filter((item) => item[i] == "1");
    } else {
        generator = generator.filter((item) => item[i] == "0");
    }
}

let CO2 = data;

for (let i = 0; i < CO2[0].length; i++) {
    if (CO2.length == 1) break;
    let count1 = 0,
        count0 = 0;

    for (let j = 0; j < CO2.length; j++) {
        let bit = CO2[j][i];

        if (bit == "1") {
            count1++;
        } else {
            count0++;
        }
    }

    if (count1 > count0 || count1 == count0) {
        CO2 = CO2.filter((item) => item[i] == "0");
    } else {
        CO2 = CO2.filter((item) => item[i] == "1");
    }
}

let generatorRating = parseInt(generator[0], 2);
let CO2Rating = parseInt(CO2[0], 2);

console.log(generatorRating * CO2Rating);