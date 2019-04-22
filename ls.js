const fs = require('fs')
const { readdir } = fs

module.exports = function() {
  process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd === 'ls'){
      readdir('./', 'utf8', (err, files) => {
        if (err) {
          throw err
        } else {
          process.stdout.write(files.join('\n'))
          process.stdout.write('\nprompt > ')
        }
      })
    }
    process.stdout.write('\nprompt > ');
});
}
