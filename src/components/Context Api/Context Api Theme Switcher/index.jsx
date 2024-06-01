import React, { useEffect, useState } from 'react'
import Card from './Comp/Card'
import ThemeBtn from './Comp/ThemeBtn'
import { ThemeToogleProvider} from './Context/ThemeSwitcher'

const ContextApiThemeSwitcher = () => {

  const [themeMode, setThemeMode] = useState('light')
  
  const lightTheme = () => {
    setThemeMode('light')
  }
  const DarkTheme = () => {
    setThemeMode('dark')
  }
  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode]);

  return (
    <ThemeToogleProvider value={{ themeMode, lightTheme, DarkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>
              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeToogleProvider>
  )
}

export default ContextApiThemeSwitcher