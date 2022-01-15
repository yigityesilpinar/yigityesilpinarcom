// npm outdated > outdated.txt
// convert  outdated.txt into npm install script with latest versions (edit outdated.txt before to make sure only wanted updates)
const fs = require('fs')
const path = require('path')
const outdatedStr = fs.readFileSync(path.resolve(path.join(__dirname, 'outdated.txt'))).toString()
const lines = outdatedStr.split('\n').slice(1, -1)

const installLines = lines.map(line => `${line.split(/\s+/)[0]}@${line.split(/\s+/)[3]}`).join(' ')

console.log(installLines)