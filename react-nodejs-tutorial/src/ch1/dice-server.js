const http = require('http')
const ctype = { 'Content-Type': 'text/html;charset=utf-8' }

const svr = http.createServer(handler)
svr.listen(3000)

function handler (req,res) {
	const url = req.url

	// root page
	if (url === '/' || url === '/index.html') {
		showIndexPage(req, res)
		return
	}
	// dice page
	if (url.substr(0,6) === '/dice/') {
		showDicePage(req,res)
		return
	}
	// others
	res.writeHead(404, ctype)
	res.end('404 not found')
}

function showIndexPage (req, res) {
	res.writeHead(200, ctype)
	const html = '<h1>DICE page information</h1>\n' +
		'<p><a href="/dice/6">6 faces dice</a></p>' +
		'<p><a href="/dice/12">12 faces dice</a></p>'
	res.end(html)
}

function showDicePage (req, res) {
	res.writeHead(200, ctype)
	const a = req.url.split('/')
	const num = parseInt(a[2])
	const rnd = Math.floor(Math.random() * num) + 1
	res.end('<p style="font-size:72px;">' + rnd + '</p>')
}