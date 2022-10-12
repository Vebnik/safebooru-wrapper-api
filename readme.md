## Use

```js
const BooruApi =  require('booruwrapperapi/src/BooruApi')

const API = new BooruApi()

API.GetImage([some_tags], 0)
  .then(src => console.log(src))
```

## Output

```js
]
  {
    ssid: 'c9ff97d43639fabf8d970dxxxxxxxxxxxxde21f.jpg',
    images: '398x',
    lastPid: 1476,
    source: 'https://safebooru.org//images/xxx/c9ff97d43639fabf8d970dc8xxxxxxb5d774de21f.jpg'
  },
  {
    ssid: '5afc494322d921754xxxxxxxxxa1a90c87e32c73.jpg',
    images: '398x',
    lastPid: 1472,
    source: 'https://safebooru.org//images/3989/5afc494322d9217549dxxxxxxxxa90c87e32c73.jpg'
  }
]
```