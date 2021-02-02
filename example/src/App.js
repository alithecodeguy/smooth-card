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
