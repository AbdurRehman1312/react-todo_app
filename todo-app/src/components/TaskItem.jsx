import React from 'react'

function TaskItem({item}) {
  return (
    <div>
        <h1 className="text-white">{item}</h1>
    </div>
  )
}

export default TaskItem