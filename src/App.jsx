import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './ui/theme-btn'
import Card from './ui/theme-card'

function App() {
  const [themeMode, setThemeMode] = useState('light')
  const lightTheme = () => {
    // const body = document.querySelector('body');
    // body.classList.remove('dark bg-gray-800');
    // body.classList.add('light bg-white');
    setThemeMode('light')
    // document.documentElement.classList.remove('dark')
  }
  const darkTheme = () => {
    // const body = document.querySelector('body');
    // body.classList.remove('light bg-white');
    // body.classList.add('dark bg-gray-800');
    setThemeMode('dark')
    // document.documentElement.classList.add('dark')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
