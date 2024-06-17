import { createContext, useState } from 'react'

export const DollarsContext = createContext()

const initialDay = () => {
  const last30Days = new Date()
  last30Days.setDate(last30Days.getDate() - 30)
  return last30Days.toISOString().split('T')[0]
}

export function DollarsProvider ({ children }) {
  const [dollars, setDollars] = useState({
    initialDay: initialDay(),
    finishDate: new Date()
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
