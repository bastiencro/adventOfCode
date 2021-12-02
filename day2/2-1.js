const fs = require('fs')
let text = fs.readFileSync("input.txt", 'utf-8');
let array = (text.split('\n'))

let x = 0;
let y = 0;

for(let i = 0; i < array.length; i++){
    let dir = array[i].split(' ')[0];
    let num = parseInt(array[i].split(' ')[1]);
    
    if(dir === 'forward'){
        x += num;
    }
    if(dir ==='up'){
        y -= num;
    }
    if(dir === 'down'){
        y += num;
    }
}

console.log(x*y)


