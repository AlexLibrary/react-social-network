import React, { useState } from 'react'
import styles from './style.module.scss'

type PropsType = {
  totalItemsCount: number
  pageSize: number
  currentPage: number
  portionSize: number
  switchToAnotherPageNumber: (number: number) => void
}

const Paginator: React.FC<PropsType> = ({ totalItemsCount, pageSize, switchToAnotherPageNumber, currentPage, portionSize }) => {
  const [portionNumber, setPortionNumber] = useState(1)

  const totalPages = Math.ceil(totalItemsCount / pageSize)

  const portionCount = Math.ceil(totalPages / portionSize)
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  const rightPortionPageNumber = portionNumber * portionSize

  const createNumbers = () => {
    const numbers = []
    for (let i = 1; i <= totalPages; i++) {
      if (i >= leftPortionPageNumber && i <= rightPortionPageNumber)
        numbers.push(SpanNumber(i))
    }
    return numbers
  }

  const SpanNumber = (number: number) => (
    <span
      key={number}
      onClick={() => switchToAnotherPageNumber(number)}
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
