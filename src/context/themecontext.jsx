import React, { createContext, useState, useEffect, useMemo } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import CssBaseline from '@mui/material/CssBaseline'

export const ThemeContext = createContext()

export function ThemeContextProvider ({ children }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light')

  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode')
    if (savedMode) {
      setMode(savedMode)
    } else {
      setMode(prefersDarkMode ? 'dark' : 'light')
    }
  }, [prefersDarkMode])

  const appTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  )

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light'
    setMode(newMode)
    localStorage.setItem('themeMode', newMode)
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={appTheme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
