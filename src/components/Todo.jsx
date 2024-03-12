import React, { useEffect } from 'react'
import { useState } from 'react'
import AddTask from './AddTask'
import ListTask from './ListTask'

const Todo = () => {
  
  const [tasks, setTask] = useState([]);

  useEffect(()=>{
    console.log('test')
  },[])


  const addTask = (task) => {
    if(tasks.map(data=>data.task).includes(task)){
      alert('task already exists')
      return 
    }
    const newTask = [...tasks, { task }]
    setTask(newTask)
  }


  const deleteTask = (index) => {
    const newTask = [...tasks]
    newTask.splice(index, 1)
    setTask(newTask)
  }

  const editTask =(index,editedText)=>{
    const newTask = [...tasks];
    newTask[index] = {task : editedText}
    setTask(newTask)
  }

  return (
    <>
      <div className='todo-container  rounded-md text-center'>
        <div className='Header text-white text-4xl p-4'>
          Todo List
        </div>
        <div className='AddTask'>
          <AddTask addTask={addTask} />
        </div>
        <div className='ListTask'>
          {tasks.map((task, index) => (
            <ListTask data={task} key={index}
            deleteTask={deleteTask} 
            index={index}
            edit ={(editText)=>editTask(index,editText)}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Todo