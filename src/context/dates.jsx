import { createContext, useState } from 'react'

export const DatesContext = createContext()

const initialDay = () => {
  const last30Days = new Date()
  last30Days.setDate(last30Days.getDate() - 30)
  return last30Days.toISOString().split('T')[0]
}

export function DatesProvider ({ children }) {
  const [dates, setDates] = useState({
    initialDay: initialDay(),
    finishDate: new Date()
  })

  return (
    <DatesContext.Provider value={{
      dates,
      setDates
    }}
    >
      {children}
    </DatesContext.Provider>
  )
}
