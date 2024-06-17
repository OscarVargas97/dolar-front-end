import * as React from 'react'
import { useState, useEffect } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'
import { fetchAndDollars } from '../../services/getDollars'

export default function DollarFilter () {
  const [startDate, setStartDate] = useState(null)
  const [finishDate, setFinishDate] = useState(null)
  useEffect(() => {
    if (!startDate || !finishDate) {
      return
    }
    fetchAndDollars({ startDate, finishDate }).then(res => { console.log(res.data) })
  }, [startDate, finishDate])

  const handleStartDateChange = (date) => {
    setStartDate(date)
    // Reset endDate if the new startDate is after the current endDate
    if (finishDate && date && date.isAfter(finishDate)) {
      setFinishDate(null)
    }
  }

  const handleEndDateChange = (date) => {
    setFinishDate(date)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label='Fecha de Inicio'
        value={startDate}
        onChange={handleStartDateChange}
      />
      <DatePicker
        label='Fecha de Termino'
        value={finishDate}
        onChange={handleEndDateChange}
        minDate={startDate ? dayjs(startDate).add(1, 'day') : null}
        disabled={!startDate}
      />
    </LocalizationProvider>
  )
}
