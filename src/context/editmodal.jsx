import { createContext, useState } from 'react'

export const EditModalContext = createContext()

export function EditModalProvider ({ children }) {
  const [editModal, setEditModal] = useState({
    id: 0,
    active: false,
    dollarsData: []
  })

  const openModal = (id) => {
    console.log('me ejecuto')
    setEditModal({
      id,
      active: true
    })
  }

  const closeModal = () => {
    setEditModal({
      id: 0,
      active: false,
      dollarsData: []
    })
  }

  return (
    <EditModalContext.Provider value={{ editModal, openModal, closeModal }}>
      {children}
    </EditModalContext.Provider>
  )
}
