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
// function readFile_pr(fname) {
// 	return new Promise((resolve) => {
// 		fs.readFile(fname, 'utf-8', (err, s) => {
// 			resolve(s)
// 		})
// 	})
// }
// readFile_pr('a.txt')
// .then((text) => {
// 	console.log('read from a...', text)
// 	return readFile_pr('b.txt')  // return promise object
// })
// .then((text) => {
// 	console.log('read from b...', text)
// 	return readFile_pr('c.txt')
// })
// .then((text) => {
// 	console.log('read from c...', text)
// })

// using generator
function read_gfn (g, fname) {
	fs.readFile(fname, 'utf-8', (err, data) => {
		g.next(data)
	})
}

const g = (function * () {
	const a = yield read_gfn(g, 'a.txt')
	console.log(a)
	const b = yield read_gfn(g, 'b.txt')
	console.log(b)
	const c = yield read_gfn(g, 'c.txt')
	console.log(c)
})()

g.next()