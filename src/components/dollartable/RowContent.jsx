import { TableCell, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { columns } from './logic/dataLoad'

export default function RowContent (_index, row) {
  const handleEdit = (id) => {
    console.log('Editar:', id)
  }

  const handleDelete = (id) => {
    console.log('Eliminar:', id)
  }

  return (
    <>
      {columns.map((column, columnIndex) => (
        <TableCell key={`${row.id}-${column.dataKey}`}>
          {row[column.dataKey]}
          {columnIndex === columns.length - 1 && (
            <>
              <IconButton
                id={`editButton${row.id}`}
                color='primary'
                onClick={() => handleEdit(row.id)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                id={`deleteButton${row.id}`}
                color='secondary'
                onClick={() => handleDelete(row.id)}
              >
                <DeleteIcon />
              </IconButton>
            </>
          )}
        </TableCell>
      ))}
    </>
  )
}
