'use strict'

class HashtagccApi {
  constructor(restify_server) {
    this.server = restify_server
    this.server.pre(this.on_request)
  }

  on_request(req, res, next) {
      res.header('Access-Control-Allow-Origin', '*')
      res.charSet('utf-8')

      return next()
  }

  post(req, res, next) {
    res.send(200, { message: 'HashtagccApi post' })
  }

  get(req, res, next) {
    res.send(200, { message: 'HashtagccApi get' })
  }

  redirect(req, res, next) {
    res.send(200, { message: 'HashtagccApi redirect' })
  }
}

module.exports = HashtagccApi
