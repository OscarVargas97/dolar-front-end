import { TableCell, TableRow } from '@mui/material'
import { columns } from './logic/dataLoad'

export default function fixedHeaderContent () {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant='head'
          sx={{
            backgroundColor: 'background.paper'
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  )
}
