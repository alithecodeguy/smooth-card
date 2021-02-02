import React from 'react'
import styles from './styles.module.css'

const ExampleComponent = ({ size, data }) => {
  const [selectedCard, setSelectedCard] = React.useState(data[0].id)
  return (
    <div className={styles.container} style={{ height: size.height }}>
      {data.map((card) => (
        <div
          className={`${styles.panel} ${
            card.id === selectedCard && styles.active
          } `}
          style={{ backgroundImage: `url(${card.url})` }}
          onClick={() => setSelectedCard(card.id)}
        >
          <h3>{card.content}</h3>
        </div>
      ))}
    </div>
  )
}

export default ExampleComponent
