import { IconButton, TableCell } from '@mui/material'
import { columns } from './logic/dataLoad'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import useDollarsData from '../../hook/useDollarsData'
import useEditModal from '../../hook/useEditModal'

export default function RowContent (_index, row) {
  const { dollars, setDollars } = useDollarsData()
  const { openModal } = useEditModal()

  const deleteRow = (id) => {
    console.log(id)
    console.log(dollars.dollarsData)
    const updatedDataDollars = dollars.dollarsData.filter(item => item.id !== id)
    setDollars({ ...dollars, dollarsData: updatedDataDollars })
  }

  return (
    <>
      {columns.map((column, colIndex) => (
        <TableCell key={`${row[column.dataKey]}-${row.id}`}>
          {row[column.dataKey]}
          {colIndex === columns.length - 1 && (
            <>
              <IconButton
                variant='contained'
                color='primary'
                startIcon={<EditIcon />}
                key={`icon-button-${row.id}`}
                aria-label='delete'
                onClick={() => openModal(row.id)}
              >
                <EditIcon key={`edit-icon-${row.id}`} />
              </IconButton>
              <IconButton
                variant='contained'
                color='secondary'
                startIcon={<DeleteIcon />}
                key={`icon-button-${row.id}`}
                aria-label='delete'
                onClick={() => deleteRow(row.id)}
              >
                <DeleteIcon key={`delete-icon-${row.id}`} />
              </IconButton>
            </>
          )}
        </TableCell>
      ))}
    </>
  )
}
