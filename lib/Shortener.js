'use strict'

// 1 Long URL to #.cc/random

class Shortener {
  constructor() {
    // create a function that returns a random character from this.alphabet
    this.alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }

  getRandomIntFromInterval(min, max)
  {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  get_random_character() {
    let random_position = this.getRandomIntFromInterval(0, this.alphabet.length - 1)

    return this.alphabet.substring(random_position, random_position + 1)
  }

  get_short_url(long_url) {
    let random_chars = ''
    for(let i = 0; i < 8; i++) {
      random_chars = random_chars.concat(this.get_random_character())
    }

    return '/' + random_chars
  }
}

module.exports = Shortener
