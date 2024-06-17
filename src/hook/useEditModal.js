import { useContext } from 'react'
import { EditModalContext } from '../context/editmodal'

export default function useEditModal () {
  const { editModal, openModal, closeModal } = useContext(EditModalContext)
  return { editModal, openModal, closeModal }
}
