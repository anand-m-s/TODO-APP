import React from 'react'
import { useState } from 'react'

function AddTask({ addTask }) {
  const [value, setValue] = useState('')
  const addItem = () => {
    if(!value.trim()) return
    addTask(value)
    setValue('')
  }
  return (
    <>
      <div className='p-2'>
        <input className='w-80 h-15 text-xl rounded-sm p-1' type="text" value={value}
          placeholder='add task here...' onChange={(e) => setValue(e.target.value)}
        />
        <button className='ml-3 bg-black text-white p-2 rounded-sm w-20' onClick={addItem}>Add</button>
      </div>
    </>
  )
}

export default AddTask