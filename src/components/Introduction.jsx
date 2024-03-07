import React from 'react'
import styles from './Introduction.module.css'
export default function Introduction({name,Age,Phone,course}) {
  return (
    <div className={styles.intro}>
      <img src="https://img.freepik.com/free-vector/floating-robot_78370-3669.jpg?size=338&ext=jpg&ga=GA1.1.98259409.1709164800&semt=sph" alt="robot" />
      <h1>Name:Max</h1>
      <h1>Age:18</h1>
      <h1>Phone:99999999</h1>
      <h1>Course:computer science</h1>
     
    </div>
  )
}
