const fs = require('fs')
fs.readFile('input.txt', 'utf-8', (err, input) => {
    if (err) throw err

    const depth = input.split('\n');
    let sup = 0;

    for(let i = 0; i < depth.length - 1; i++){
        if(parseInt(depth[i]) < parseInt(depth[i+1])){
            sup++;
        }
    }
    console.log(sup);
  })


