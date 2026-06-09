const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const port = parseInt(process.env.PORT || '3000', 10)
const app = next({ dev: false, hostname: '0.0.0.0', port })
const handle = app.getRequestHandler()

const AUTH_USER = process.env.BASIC_AUTH_USER
const AUTH_PASS = process.env.BASIC_AUTH_PASS

app.prepare().then(() => {
  createServer((req, res) => {
    if (AUTH_USER && AUTH_PASS) {
      const header = req.headers['authorization']

      if (!header?.startsWith('Basic ')) {
        res.writeHead(401, { 'WWW-Authenticate': 'Basic realm="Cluide Dev"' })
        res.end('Unauthorized')
        return
      }

      const decoded = Buffer.from(header.slice(6), 'base64').toString()
      const sep = decoded.indexOf(':')
      const user = decoded.slice(0, sep)
      const pass = decoded.slice(sep + 1)

      if (user !== AUTH_USER || pass !== AUTH_PASS) {
        res.writeHead(401, { 'WWW-Authenticate': 'Basic realm="Cluide Dev"' })
        res.end('Unauthorized')
        return
      }
    }

    handle(req, res, parse(req.url, true))
  }).listen(port, '0.0.0.0', () => {
    console.log(`> Ready on port ${port}`)
  })
})
