export const columns = [
  {
    width: 120,
    label: 'Moneda Cambio',
    dataKey: 'name',
    numeric: true
  },

  {
    width: 120,
    label: 'Valor',
    dataKey: 'value',
    numeric: true
  },
  {
    width: 100,
    label: 'Fecha',
    dataKey: 'date'
  },
  {
    width: 100,
    label: ''
  }

]

export function createData (id, date, value, name) {
  return { id, date, value, name }
}

export function loadMoreRows (currentRows) {
  const newRows = []
  for (let i = 0; i < 10; i++) {
    const index = currentRows.length + i
    if (index >= sample.length) break // Stop when reaching the end of sample data
    const randomSelection = sample[Math.floor(Math.random() * sample.length)]
    newRows.push(createData(index, ...randomSelection))
  }
  return newRows
}

export const sample = [
  [1, 'Cupcake', 305],
  [2, 'Donut', 452],
  [3, 'Eclair', 262],
  [4, 'Frozen yogurt', 159]
]
