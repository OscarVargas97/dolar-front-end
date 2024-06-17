import * as React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from './components/navbar/Navbar'
import Grid from '@mui/material/Unstable_Grid2'
import DolarLine from './components/dollarline/DolarLine'
import DolarTable from './components/dollartable/DollarTable'
import Box from '@mui/material/Box'
import { Card, CardContent } from '@mui/material'
import DollarFilter from './components/dollarFilter/DollarFilter'
import { DollarsProvider } from './context/dollars'
export default function App () {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light')

  const appTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  )

  return (
    <ThemeProvider theme={appTheme}>
      <DollarsProvider>
        <CssBaseline />
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Box sx={{ flex: 3, display: 'flex' }}>
            <Grid container sx={{ flex: 1 }}>
              <Grid xs={8} sx={{ height: '100%' }}>
                <DolarLine />
              </Grid>
              <Grid xs={4} sx={{ height: '100%' }}>
                <Card style={{ height: '93%', width: '100%' }}>
                  <CardContent style={{ height: '100%', width: '100%' }}>
                    <DollarFilter />
                    <DolarTable />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </DollarsProvider>
    </ThemeProvider>
  )
}
