import React, { useState, useEffect } from 'react'
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material'
import useEditModal from '../../hook/useEditModal'
import useDollarsData from '../../hook/useDollarsData'

export default function SimpleModal () {
  const { editModal, closeModal } = useEditModal()
  const { dollars, setDollars } = useDollarsData()

  const [formValues, setFormValues] = useState({})

  useEffect(() => {
    if (editModal.active) {
      setFormValues(dollars.dollarsData.find(dollar => dollar.id === editModal.id) || {})
    }
  }, [editModal, dollars])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const handleSave = () => {
    const updatedDollars = dollars.dollarsData.map(dollar =>
      dollar.id === formValues.id ? formValues : dollar
    )
    setDollars({ ...dollars, dollarsData: updatedDollars })
    closeModal()
  }

  return (
    <Dialog open={editModal.active} onClose={closeModal}>
      <DialogTitle>Editar valor del dolar</DialogTitle>
      <DialogContent>
        <TextField
          margin='dense'
          name='date'
          label='Date'
          type='text'
          fullWidth
          value={formValues.date || ''}
          disabled
        />
        <TextField
          margin='dense'
          name='value'
          label='Value'
          type='number'
          fullWidth
          value={formValues.value || ''}
          onChange={handleChange}
        />

      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal} color='primary'>
          Cancel
        </Button>
        <Button onClick={handleSave} color='primary'>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}
