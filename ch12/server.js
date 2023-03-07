function startServer(port) {
    app.listen(port, function() {
        console.log(`Express started in ${app.get('env')} mode on http://localhost:${port}; press Ctrl-C to terminate.`)
    })
}

if (require.main === module) {
    startServer(process.env.PORT || 3000)
} else {
    module.exports = startServer
}