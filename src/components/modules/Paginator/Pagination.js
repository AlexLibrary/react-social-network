import React from 'react'
import styles from './style.module.scss'

const Paginator = ({ totalUsersCount, pageSize, switchToAnotherPage, currentPage }) => {
  const createNumbers = () => {
    const numbers = []
    const totalPages = Math.ceil(totalUsersCount / pageSize)
    for (let i = 1; i <= totalPages; i++) {
      numbers.push(NumberSpan(i))
    }
    return numbers
  }

  const NumberSpan = (number) => (
    <span
      key={number}
      onClick={() => switchToAnotherPage(number)}
      className={
        currentPage === number ? `${styles.page} ${styles.page_active}` : styles.page
      }
    >{number}</span>
  )

  return (
    <div className={styles.pages}>
      {createNumbers()}
    </div>
  )
}

export default Paginator
