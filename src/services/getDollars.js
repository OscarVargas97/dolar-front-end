export async function fetchDollars ({ startDate = '2023-02-14', finishDate = '2023-06-15' }) {
  return await fetch(`http://localhost:8000/api/dollar-values?start_date=${startDate}&end_date=${finishDate}`)
    .then(async res => {
      if (!res.ok) throw new Error('Error en la petición')
      return await res.json()
    })
    .then(res => {
      return {
        data: res.data
      }
    })
}
