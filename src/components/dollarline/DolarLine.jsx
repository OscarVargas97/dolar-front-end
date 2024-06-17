import * as React from 'react'
import { LineChart } from '@mui/x-charts/LineChart'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { DollarsContext } from '../../context/dollars'
import { useContext, useEffect, useState } from 'react'
import dayjs from 'dayjs'

export default function BasicLineChart () {
  const { dollars } = useContext(DollarsContext)
  const [chartData, setChartData] = useState({ xAxisData: [], seriesData: [] })

  useEffect(() => {
    if (dollars.dollarsData) {
      const sortedData = dollars.dollarsData
        .map(item => ({
          ...item,
          value: parseFloat(item.value),
          date: dayjs(new Date(item.date))
        }))
        .sort((a, b) => a.date - b.date)

      setChartData(sortedData)
    }
  }, [dollars])
  return (
    <Card style={{ height: '93%', width: '100%' }}>
      <CardContent style={{ height: '93%', width: '100%' }}>
        <LineChart
          style={{ height: '93%', width: '100%' }}
          xAxis={[{
            dataKey: 'date',
            type: 'time',
            scaleType: 'band',
            label: 'Fecha',
            valueFormatter: (date) => dayjs(date).format('DD/MM/YYYY hh:mm:ss')
          }]}
          series={[
            {
              dataKey: 'value',
              label: 'Valor del dólar'
            }
          ]}
          dataset={chartData}
          margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
          grid={{ vertical: true, horizontal: true }} Especifica cómo obtener el id de la serie
        />
      </CardContent>
    </Card>
  )
}
