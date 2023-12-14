'use client'

import React, { useState } from 'react'

const Page = () => {
  const [task, setTask] = useState('')
  const [description, setDescription] = useState('')
  const [mainTask,setMainTask]=useState([])

  const handleSubmit = (e)=>{
  e.preventDefault()
  setMainTask([...mainTask,{task,description}])
  setDescription('')
  setTask('')
  }

const HandleDelete= (i)=>{
  let copytask = [...mainTask]
  copytask.splice(i,1)
  setMainTask(copytask)
}
  

  


let Showtask = <h2 className='text-2xl'>No Tasks to show</h2>

if (mainTask.length>0){
  Showtask = mainTask.map((t,i)=>{
    return(
      
   <div key={i} >
  
     <div className='mb-6'>
     <h1 className='text-xl items-center font-semibold'>Task</h1>
      <h1 className='overflow-x-auto'>{t.task}</h1>
     </div>
      
   <div className='overflow-x-auto' >
   <h1 className='text-xl  font-semibold'>Description</h1>
      <h1>{t.description}</h1>
      <button className='mt-8 mb-6 p-3 bg-black font-semibold rounded-lg text-white w-36'
      onClick={()=>{
        HandleDelete(i)
      }}>Delete</button>
   </div>
      
  
   </div>
    )
  
  })
}


  return (
    <>
    <h1 className='bg-black text-white p-5 text-3xl font-bold text-center'>MyTodoList</h1>

<form>

<input className='border-zinc-600 text-2xl border-2  m-5 px-4 py-2' type="text"  placeholder='Enter Task' value={task} onChange={(e)=>{
  setTask(e.target.value)
}} />
<input className='border-zinc-600 text-2xl border-2  m-5 px-4 py-2' type="text" placeholder='Enter Description' value={description} onChange={(e)=>{
  setDescription(e.target.value)
}} />
<button className='bg-black px-4 py-3 m-5 text-white text-2xl font-bold rounded-md ' onClick={handleSubmit}>Add Task</button>

</form>
<hr/>

<div className='p-10 bg-slate-200'>

<ul>
  {Showtask}
</ul>

</div>

    </>
  )
}

export default Page
