import { useState } from 'react'
import './App.css'

function App() {

  const [task, setTask] = useState({
    name: ''
  })
  const [taskList, setTaskList] = useState([])

  function changeHandler(e){
    const name = e.target.name
    const value = e.target.value
    setTask({
      ...task,
      [name]:value
    })
  }

  function submitHandler(e){
    e.preventDefault();
    setTaskList([...taskList, task])
    setTask({name: ''})  
  }

  function deleteHandler(e){
    e.preventDefault();

    const index = e.target.index
    const list = [...taskList]
    list.splice(index, 1)
    setTaskList(list)
  }

  return (
   <div className='flex flex-col items-center p-10 divide-y-4' >
   <div>
       <div className=''>
       <form onSubmit={submitHandler}>
       <input 
       type='text'
       onChange={changeHandler} 
       value={task.name}
       name='name' 
       required
       placeholder='enter your task'

       />
        <button>Add</button>
       </form>
       </div>
       <div>
        {taskList?.map((item, index) => {
          return <div key={index} className='border border-blue-500 flex justify-between px-2'>{item.name}
          <button index={index} onClick={deleteHandler}  >delete</button>
          </div>
        }) }
       </div>
   </div>
   </div>
  )
}

export default App
