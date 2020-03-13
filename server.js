const sslRedirect = require('heroku-ssl-redirect');
const express = require('express')
const next = require('next')

const PORT = 3000

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.use(sslRedirect()) // Ensure Heroku traffic gets served over HTTPS.

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  // Listen on the Heroku-assigned port.
  // If one wasn't assigned, listen on PORT.
  server.listen((process.env.PORT || PORT), (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:' + PORT)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
