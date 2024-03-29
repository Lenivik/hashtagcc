'use strict'

const Shortener = require('./Shortener')

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
    let action = req.params.action
    let response = {}

    switch(action) {

      // POST /api/shorten
      case 'shorten':
        let shortener = new Shortener()

        response = {
          error: false,
          message: 'ok',
          short_url: shortener.get_short_url(req.body.long_url)
        }

        this.db[response.short_url] = {
          id: 1,
          original_url: req.body.long_url,
          path: response.short_url
        }

        break

    }

    res.send(200, response)
  }

  get(req, res, next) {
    res.send(200, { message: 'HashtagccApi get' })
  }

  redirect(req, res, next) {
    let key = '/' + req.params.path

    console.log('for key', key, 'we have', this.db[key])

    res.redirect(this.db[key].original_url, next);
  }
}

module.exports = HashtagccApi
