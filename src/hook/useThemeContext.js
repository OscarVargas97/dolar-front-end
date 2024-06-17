import { useContext } from 'react'
import { ThemeContext } from '../context/themecontext'

export default function useThemeContext () {
  const { mode, toggleTheme } = useContext(ThemeContext)
  return { mode, toggleTheme }
}
