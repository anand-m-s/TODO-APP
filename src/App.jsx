import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Todo />
    </div>
  )
}

export default App
