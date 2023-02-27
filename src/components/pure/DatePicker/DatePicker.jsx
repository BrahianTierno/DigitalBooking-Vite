import React from 'react'
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite-rtl.css'
import styles from './/datePicker.module.css'
const DatePicker = () => {
  return (
    <div className={styles.container}>
        <DateRangePicker className={styles.datePicker} size='lg' placeholder="Check in - Check Out"></DateRangePicker>
    </div>
  )
}

export default DatePicker

