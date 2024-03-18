import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Todo from './components/Todo/Todo'
import Bg from './images/dotBack.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={`h-screen bg-[#7BD5F5] flex justify-center items-center`}>
        <Todo />
      </div>
    </>
  )
}

export default App
