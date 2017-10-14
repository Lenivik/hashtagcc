'use strict'

const restify = require('restify');
const HashtagccApi = require('./lib/HashtagccApi.js')

let server = restify.createServer();
server.use(restify.plugins.queryParser())
server.use(restify.plugins.bodyParser())

let api = new HashtagccApi(server)

server.pre((req, res, next) => {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
    res.header('Expires', '-1')
    res.header('Pragma', 'no-cache, no-store')

    return next()
})

server.post('/api/:action', api.post)
server.get('/api/:action', api.get)
server.get('/:path', api.redirect) // use for the #.cc redirection

server.listen(3000, function() {
  console.log('%s listening at %s', server.name, server.url);
});
