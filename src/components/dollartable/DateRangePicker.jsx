import * as React from 'react'
import { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'

export default function DateRangePicker () {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const handleStartDateChange = (date) => {
    setStartDate(date)
    // Reset endDate if the new startDate is after the current endDate
    if (endDate && date && date.isAfter(endDate)) {
      setEndDate(null)
    }
  }

  const handleEndDateChange = (date) => {
    setEndDate(date)
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
        value={endDate}
        onChange={handleEndDateChange}
        minDate={startDate ? dayjs(startDate).add(1, 'day') : null}
        disabled={!startDate}
      />
    </LocalizationProvider>
  )
}
