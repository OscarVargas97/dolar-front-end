import { Switch } from '@mui/material'
import { useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function SwitchTheme () {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light')
  const handleChange = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'))
  }
  return (
    <Switch
      checked={mode === 'dark'}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  )
}
