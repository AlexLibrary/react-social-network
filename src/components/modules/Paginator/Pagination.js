import React, { useState } from 'react'
import styles from './style.module.scss'

const Paginator = ({ totalItemsCount, pageSize, switchToAnotherPage, currentPage, portionSize }) => {
  const [portionNumber, setPortionNumber] = useState(1)
  const totalPages = Math.ceil(totalItemsCount / pageSize)

  const portionCount = Math.ceil(totalPages / portionSize)
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  const rightPortionPageNumber = portionNumber * portionSize

  const createNumbers = () => {
    const numbers = []
    for (let i = 1; i <= totalPages; i++) {
      if (i >= leftPortionPageNumber && i <= rightPortionPageNumber)
        numbers.push(NumberSpan(i))
    }
    return numbers
  }

  const NumberSpan = (number) => (
    <span
      key={number}
      onClick={() => switchToAnotherPage(number)}
      className={
        currentPage === number ? `${styles.number} ${styles.number_active}` : styles.number
      }
    >{number}</span>
  )

  return (
    <div className={styles.numbers}>
      {
        portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>
          {'<'}
        </button>
      }
      {createNumbers()}
      {
        portionCount > portionNumber &&
        <button onClick={() => { setPortionNumber(portionNumber + 1) }}>
          {'>'}
        </button>
      }
    </div>
  )
}

export default Paginator
