import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'

import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import useThemeContext from '../../hook/useThemeContext'

const Navbar = () => {
  const { mode, toggleTheme } = useThemeContext()

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' style={{ flexGrow: 1 }}>
          Valor del dólar
        </Typography>
        <IconButton edge='end' color='inherit' onClick={toggleTheme}>
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
