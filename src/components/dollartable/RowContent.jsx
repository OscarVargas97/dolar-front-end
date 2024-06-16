import { TableCell } from '@mui/material'
import { columns } from './logic/dataLoad'

export default function RowContent (_index, row) {
  return (
    <>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </>
  )
}
