import BooruApi from './BooruApi'

BooruApi.GetImage(['loli'], 0)
  .then((src) => console.log(src))