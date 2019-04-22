const pwd = require('./pwd.js')
const ls = require('./ls.js')

process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd === 'ls'){
        ls();
    }
    if (cmd === 'pwd'){
        pwd();
    }
    process.stdout.write('\nprompt > ');
})


//pwd()
//ls()

//question: why invoked?
