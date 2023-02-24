const handlers = require('./lib/handlers')
const express = require('express')
const path = require('path')
const expressHandlebars = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000

app.get('/', handlers.home)
app.get('/about', handlers.about)

app.use(handlers.notFound)
app.use(handlers.serverError)

if (require.main === module) {
    app.listen(port, () => console.log(
        `Express started on http://localhost:${port}; ` +
        `press Ctrl-C to terminate.`
    ))
} else {
    module.exports = app
}
