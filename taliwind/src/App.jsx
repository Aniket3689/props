import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './component/Cards'

function App() {
  const [count, setCount] = useState(0)
   let arr={
    username:"aniket",
    age:"21",
  }

  return (
    <>
      <p className='bg-black rounded-xl text-yellow-400'>taliwind</p>
      <Cards username="aniket" someobj={arr} />
      <Cards username="chaursiya" />
    </>
  )
}

export default App
