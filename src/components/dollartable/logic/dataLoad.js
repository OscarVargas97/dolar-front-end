export const columns = [
  {
    width: 200,
    label: 'Fecha',
    dataKey: 'date'
  },
  {
    width: 120,
    label: 'Valor',
    dataKey: 'value',
    numeric: true
  },
  {
    width: 120,
    label: 'Moneda Cambio',
    dataKey: 'type',
    numeric: true
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
  [4, 'Frozen yogurt', 159],
  [5, 'Gingerbread', 356],
  [6, 'Honeycomb', 408],
  [7, 'Ice cream sandwich', 237],
  [8, 'Jelly Bean', 375],
  [9, 'KitKat', 518],
  [10, 'Lollipop', 392],
  [11, 'Marshmallow', 318],
  [12, 'Nougat', 360],
  [13, 'Oreo', 437],
  [14, 'Pie', 305],
  [15, 'Quindim', 452],
  [16, 'Rice pudding', 262],
  [17, 'Semifreddo', 159],
  [18, 'Tiramisu', 356],
  [19, 'Ube', 408],
  [20, 'Vanilla', 237],
  [21, 'Waffle', 375],
  [22, 'Xoi', 518],
  [23, 'Yogurt', 392],
  [24, 'Zabaione', 318],
  [25, 'Apple pie', 360],
  [26, 'Baklava', 437],
  [27, 'Cheesecake', 305],
  [28, 'Dacquoise', 452],
  [29, 'Eccles cake', 262],
  [30, 'Flan', 159],
  [31, 'Gulab jamun', 356],
  [32, 'Hummingbird cake', 408],
  [33, 'Icebox cake', 237],
  [34, 'Junket', 375],
  [35, 'Kanafeh', 518],
  [36, 'Lamington', 392],
  [37, 'Macarons', 318],
  [38, 'Napoleon', 360],
  [39, 'Oliebol', 437],
  [40, 'Pavlova', 305],
  [41, 'Quesito', 452],
  [42, 'Rum cake', 262],
  [43, 'Souffle', 159],
  [44, 'Tres leches', 356],
  [45, 'Upside-down cake', 408],
  [46, 'Victoria sponge', 237],
  [47, 'Whoopie pie', 375],
  [48, 'Yule log', 518],
  [49, 'Zuger kirschtorte', 392],
  [50, 'Angel cake', 318],
  [51, 'Babka', 360],
  [52, 'Cannoli', 437],
  [53, 'Dobos torte', 305],
  [54, 'Esterhazy torte', 452],
  [55, 'Fruitcake', 262],
  [56, 'Galette', 159],
  [57, 'Hamentashen', 356],
  [58, 'Imarti', 408],
  [59, 'Joulutorttu', 237],
  [60, 'Kouign-amann', 375],
  [61, 'Lekach', 518],
  [62, 'Mazurek', 392],
  [63, 'Nanaimo bar', 318],
  [64, 'Oatcake', 360],
  [65, 'Pandoro', 437],
  [66, 'Qottab', 305],
  [67, 'Rum baba', 452],
  [68, 'Stollen', 262],
  [69, 'Tarta de Santiago', 159],
  [70, 'Umm Ali', 356],
  [71, 'Vatrushka', 408],
  [72, 'Wanja', 237],
  [73, 'Xmas pudding', 375],
  [74, 'Yema', 518],
  [75, 'Zopf', 392],
  [76, 'Ais kacang', 318],
  [77, 'Bebinca', 360],
  [78, 'Cendol', 437],
  [79, 'Diples', 305],
  [80, 'Eccles cake', 452],
  [81, 'Firni', 262],
  [82, 'Gulab jamun', 159],
  [83, 'Honey cake', 356],
  [84, 'Imarti', 408],
  [85, 'Jalebi', 237],
  [86, 'Kanafeh', 375],
  [87, 'Lokma', 518],
  [88, 'Makroud', 392],
  [89, 'Nanaimo bar', 318],
  [90, 'Oliebol', 360],
  [91, 'Pavlova', 437],
  [92, 'Qottab', 305],
  [93, 'Rum baba', 452],
  [94, 'Stollen', 262],
  [95, 'Tiramisu', 159],
  [96, 'Umm Ali', 356],
  [97, 'Victoria sponge', 408],
  [98, 'Wanja', 237],
  [99, 'Xmas pudding', 375],
  [100, 'Yema', 518],
  [101, 'Zopf', 392]
]
