import { TableCell } from '@mui/material'
import { columns } from './logic/dataLoad'

export default function RowContent (_index, row) {
  return (
    <>
      {columns.map((column) => (
        <TableCell
          key={`${row[column.dataKey]}-${row.id}`}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </>
  )
}
