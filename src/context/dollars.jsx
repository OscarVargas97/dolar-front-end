import { createContext, useState } from 'react'
import { fetchUsers } from '../services/getDollars'

export const DollarsContext = createContext()

const initialDay = () => {
  const last30Days = new Date()
  last30Days.setDate(last30Days.getDate() - 30)
  return last30Days.toISOString().split('T')[0]
}
const finishDay = () => {
  return new Date().toISOString().split('T')[0]
}

export function DollarsProvider ({ children }) {
  const [dollars, setDollars] = useState({
    dollarsData: fetchUsers({ startDate: initialDay(), finishDate: finishDay() })
  })

  return (
    <DollarsContext.Provider value={{
      dollars,
      setDollars
    }}
    >
      {children}
    </DollarsContext.Provider>
  )
}
