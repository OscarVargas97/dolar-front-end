import React from 'react'
import { Box, Grid } from '@mui/material'

export default function MainContent ({ leftContent, rightContent }) {
  return (
    <Box sx={{ flex: 3, display: 'flex' }}>
      <Grid container sx={{ flex: 1 }}>
        <Grid xs={8} sx={{ height: '100%' }}>
          {leftContent}
        </Grid>
        <Grid xs={4} sx={{ height: '100%' }}>
          {rightContent}
        </Grid>
      </Grid>
    </Box>
  )
}
