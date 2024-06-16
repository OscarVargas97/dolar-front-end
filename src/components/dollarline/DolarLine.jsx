import * as React from 'react'
import { LineChart } from '@mui/x-charts/LineChart'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Button, CardActionArea, CardActions } from '@mui/material'

export default function BasicLineChart () {
  return (
    <Card style={{ height: '93%', width: '100%' }}>
      <CardActionArea style={{ height: '93%', width: '100%' }}>
        <CardContent style={{ height: '93%', width: '100%' }}>
          <LineChart
            style={{ height: '93%', width: '100%' }}
            xAxis={[{ data: [1, 2, 3, 5, 8, 10, 11, 12] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5, 3, 15]
              }
            ]}
            margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
            grid={{ vertical: true, horizontal: true }}
          />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
      </CardActions>
    </Card>
  )
}
