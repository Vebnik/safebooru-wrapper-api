const BooruApi = require('./BooruApi')

const tags = ['loli']

const API = new BooruApi()

API.GetImage(tags, 0).then(src => console.log(src))

