import * as React from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import styles from './/calenadr.module.css'

export default function Calendar() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}> 
            <DemoContainer components={['DateRangeCalendar', 'DateRangeCalendar']}>
                <DemoItem>
                    <div className={styles.oneCalendar}>
                        <DateRangeCalendar calendars={1} />
                    </div>
                </DemoItem>
                <DemoItem>
                    <div className={styles.calendar}>
                        <DateRangeCalendar calendars={2} />
                    </div>
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
    );
}