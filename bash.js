const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');

process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
    data = data.toString().trim().split(' ');
    const cmd = data[0];
    const fileName = data[1];
    if (cmd === 'ls'){
        ls();
    }
    if (cmd === 'pwd'){
        pwd();
    }
    if (cmd === 'cat'){
        cat(fileName);
    }
})

//question: why invoked?
