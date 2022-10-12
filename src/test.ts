import BooruApi from './BooruApi'

BooruApi.GetImage(['cyberpunk_edgerunners'], 0)
  .then((src) => console.log(src))