import { DollarsProvider } from '../context/dollars'
import { EditModalProvider } from '../context/editmodal'
import { ThemeContextProvider } from '../context/themecontext'

export default function ProvidersCapsule ({ children }) {
  return (
    <>
      <ThemeContextProvider>
        <DollarsProvider>
          <EditModalProvider>
            {children}
          </EditModalProvider>
        </DollarsProvider>
      </ThemeContextProvider>
    </>
  )
}
