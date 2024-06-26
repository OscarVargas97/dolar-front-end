import { createContext, useState, useEffect } from 'react'
import { fetchDollars } from '../services/getDollars'

export const DollarsContext = createContext()

const initialDay = () => {
  const last30Days = new Date()
  last30Days.setDate(last30Days.getDate() - 30)
  return last30Days.toISOString().split('T')[0]
}
const finishDay = () => {
  return new Date().toISOString().split('T')[0]
}

const getData = async () => {
  const data = await fetchDollars({ startDate: initialDay(), finishDate: finishDay() })
  return data.data
}

export function DollarsProvider ({ children }) {
  const [dollars, setDollars] = useState({
    dollarsData: []
  })

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData()
      setDollars({ dollarsData: data })
    }
    fetchData()
  }, [])

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
