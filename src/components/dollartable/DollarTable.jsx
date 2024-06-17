import * as React from 'react'
import { useState, useContext, useEffect } from 'react'
import Paper from '@mui/material/Paper'
import RowContent from './RowContent'
import fixedHeaderContent from './FixedHeaderContent'
import { TableVirtuoso } from 'react-virtuoso'
import { VirtuosoTableComponents } from './CustomVirtuosoTable'
import { DollarsContext } from '../../context/dollars'

export default function DollarTable () {
  const { dollars } = useContext(DollarsContext)
  const [data, setData] = useState(dollars.dollarsData)
  useEffect(() => {
    setData(dollars.dollarsData)
  }, [dollars])
  return (

    <Paper style={{ height: '100%', width: '100%' }}>

      <TableVirtuoso
        data={data}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={RowContent}
      />
    </Paper>
  )
}
