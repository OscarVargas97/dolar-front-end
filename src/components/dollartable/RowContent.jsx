import { IconButton, TableCell } from '@mui/material'
import { columns } from './logic/dataLoad'
import DeleteIcon from '@mui/icons-material/Delete'

function deleteRow (id) {
  console.log(`Deleting row ${id}`)
}

// onClick={}
export default function RowContent (_index, row) {
  return (
    <>
      {columns.map((column, colIndex) => (
        <TableCell key={`${row[column.dataKey]}-${row.id}`}>
          {row[column.dataKey]}
          {colIndex === columns.length - 1 && (
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

          )}
        </TableCell>
      ))}
    </>
  )
}
