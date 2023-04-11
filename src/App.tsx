import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainView from './views/MainView'


function App() {
  const [count, setCount] = useState(0)




 

  return (
    <div className="font-rasa">
      <MainView />
    </div>
  )
}

export default App
