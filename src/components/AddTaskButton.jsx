import React from 'react'

function AddTaskButton() {
  return (
    <div className='items-center justify-center flex flex-col h-2/3 mt-7'>
        <div className='flex justify-center'>
            <h1 className='text-3xl text-gray-500 text-bold font-bold'> TO DO LIST </h1>
        </div>
        <div className='flex justify-between w-dvw mt-10 '>
            <input className='border-2 border-gray-500 rounded-lg w-5/6 px-4 hover:border-gray-900 ml-14 ' placeholder='Add a task'/>
            <button className='rounded-lg bg-blue-300 px-8 py-2 mr-8' onClick={() => alert('Button clicked!')}>Add Task</button>
        </div>
    </div>
  )
}

export default AddTaskButton