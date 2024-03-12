import { Input } from 'postcss'
import React, { useState } from 'react'

function ListTask({ data, deleteTask, index,edit }) {

  const [isEditing, setIsEditing] = useState(false)
  const [editedValue, SetEditedValue] = useState(data.task)

  const saveEditedValue=()=>{
    edit(editedValue)
    setIsEditing(false)
  }


  return (
    <div className='flex justify-center mb-1'>
      <div className='text-lg font-medium p-2 border w-5/12 flex justify-between rounded-md bg-cyan-50'>
       
        {isEditing ?
          <input type='text' value={editedValue} 
          onChange={(e)=>SetEditedValue(e.target.value)}  />
          : data.task}

        <div>
          {isEditing ?
            <button onClick={saveEditedValue} 
            className='bg-emerald-700 text-white m-2 p-1 rounded-sm'>Save</button>
            : <button onClick={() => setIsEditing(true)}
              className='bg-black text-white m-2 p-1 rounded-sm'>Edit</button>
          }



          <button className=' bg-red-400 p-1 rounded-sm' onClick={() => deleteTask(index)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default ListTask