import React from 'react'
import Routung from './components/Routing'
import IndexBasedMaping from './components/IndexBasedMaping'
import SearchBar from './components/SearchBar'
import RandomPasswordGenerator from './components/RandomPasswordGenerator'
import UserApp from './components/Context Api/Context Api Practice/UserApp'
import ContextApiThemeSwitcher from './components/Context Api/Context Api Theme Switcher'



function App() {
  return (
    <div className='flex justify-center items-center h-screen'>
      {/* <Routung/> */}
      {/* <SearchBar /> */}
      {/* <RandomPasswordGenerator/> */}
      {/* <UserApp/> */}
      <ContextApiThemeSwitcher/>
    </div>

  )
}

export default App