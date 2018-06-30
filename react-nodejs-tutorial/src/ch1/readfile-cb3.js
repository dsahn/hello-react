const fs = require('fs')

// callback hell
// fs.readFile('a.txt', 'utf-8', function (err, data) {
// 	console.log('from a file:', data)
// 	fs.readFile('b.txt', 'utf-8', function (err, data) {
// 		console.log('from b file:', data)
// 		fs.readFile('c.txt', 'utf-8', function (err, data) {
// 				console.log('from c file:', data)
// 		})
// 	})
// })

// using promise
function readFile_pr(fname) {
	return new Promise((resolve) => {
		fs.readFile(fname, 'utf-8', (err, s) => {
			resolve(s)
		})
	})
}

readFile_pr('a.txt')
.then((text) => {
	console.log('read from a...', text)
	return readFile_pr('b.txt')  // return promise object
})
.then((text) => {
	console.log('read from b...', text)
	return readFile_pr('c.txt')
})
.then((text) => {
	console.log('read from c...', text)
})