import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Fejlec } from './components/FejlecComp'
import { ColorPicker } from './components/ColorChangerComp'
import { Lablec } from './components/LablecComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Fejlec></Fejlec>


        <ColorPicker></ColorPicker>



        <Lablec author='Varga Dávid' timeSpent='20perc' date='2077-03-12' AI_usage='Nem használtam MI-t'></Lablec>


    </>
  )
}

export default App
