import React from 'react'
import { Box, Card, CardContent } from '@mui/material'
import Navbar from './components/navbar/Navbar'
import MainContent from './components/MainContent.jsx'
import ProvidersCapsule from './components/ProvidersCapsule'
import DollarLine from './components/dollarline/DollarLine'
import DollarTable from './components/dollartable/DollarTable.jsx'
import DollarFilter from './components/dollarFilter/DollarFilter.jsx'

export default function App () {
  return (
    <ProvidersCapsule>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <MainContent
          leftContent={<DollarLine />}
          rightContent={
            <Card style={{ height: '93%', width: '100%' }}>
              <CardContent style={{ height: '100%', width: '100%' }}>
                <DollarFilter />
                <DollarTable />
              </CardContent>
            </Card>
}
        />
      </Box>
    </ProvidersCapsule>
  )
}
