# smooth-card

> showing smooth cards

[![NPM](https://img.shields.io/npm/v/smooth-card.svg)](https://www.npmjs.com/package/smooth-card) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<div align="center">
    <img src="./demo.gif" width="450">
</div>

## Install

```bash
npm install --save smooth-card
```

## Usage

```jsx
import React from 'react'

import SmoothCard from 'smooth-card'
import 'smooth-card/dist/index.css'

const size = { height: 400, width: 200 }
const data = [
  {
    id: 1,
    url: `https://picsum.photos/${size.height}/${size.width}?t=${
      Date.now() + 1
    }`,
    content: 'follow'
  },
  {
    id: 2,
    url: `https://picsum.photos/${size.height}/${size.width}?t=${
      Date.now() + 2
    }`,
    content: 'alithecodeguy'
  },
  {
    id: 3,
    url: `https://picsum.photos/${size.height}/${size.width}?t=${
      Date.now() + 3
    }`,
    content: 'channel'
  },
  {
    id: 4,
    url: `https://picsum.photos/${size.height}/${size.width}?t=${
      Date.now() + 4
    }`,
    content: 'on'
  },
  {
    id: 5,
    url: `https://picsum.photos/${size.height}/${size.width}?t=${
      Date.now() + 5
    }`,
    content: 'Telegram and Youtube'
  }
]

const App = () => {
  return <SmoothCard data={data} size={size} />
}

export default App
```

## inspiration

Traversy Media

## License

MIT © [alithecodeguy](https://github.com/alithecodeguy)
