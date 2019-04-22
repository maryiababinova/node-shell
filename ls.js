const fs = require('fs')
const { readdir } = fs //extracting readdir from fs object and assigning it to eponymous variable

module.exports = function() {
  readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err
    } else {
      process.stdout.write(files.join('\n'))
      process.stdout.write('\nprompt > ');
    }
  });
}
