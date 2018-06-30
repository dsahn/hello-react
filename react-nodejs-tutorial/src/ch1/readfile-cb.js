const fs = require('fs')
fs.readFile('test.txt', 'utf-8', function (err, data) {
	console.log(data)
})
// Added in ECMAScript 2015
fs.readFile('test.txt', 'utf-8', (err, data) => {
	console.log(data)
})