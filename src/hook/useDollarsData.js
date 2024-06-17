import { useContext } from 'react'
import { DollarsContext } from '../context/dollars'

export default function useDollarsData () {
  const { dollars, setDollars } = useContext(DollarsContext)
  return { dollars, setDollars }
}
