import React from 'react'
import styles from './styles.module.css'

export const SmoothCard = ({ text }) => {
  return (
    <div class='container'>
      <div
        class='panel active'
        style="background-image: url('./assets/a1.jpeg')"
      >
        <h3>a1</h3>
      </div>
      <div class='panel' style="background-image: url('./assets/a2.jpeg')">
        <h3>a2</h3>
      </div>
      <div class='panel' style="background-image: url('./assets/a3.jpeg')">
        <h3>a3</h3>
      </div>
      <div class='panel' style="background-image: url('./assets/a4.jpeg')">
        <h3>a4</h3>
      </div>
      <div class='panel' style="background-image: url('./assets/a5.jpeg')">
        <h3>a5</h3>
      </div>
    </div>
  )
  return <div className={styles.test}>Example Component: {text}</div>
}
