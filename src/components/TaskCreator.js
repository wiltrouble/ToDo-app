import React, { useState } from 'react'

export const TaskCreator = props => {

    const [newTaskName, setNewtaskName] = useState('')

    const updatenewTaskValue = e => setNewtaskName(e.target.value)

    const createNewTask = () => {
        props.callback(newTaskName);
        setNewtaskName('')
    }

    return (
        <div className="my-1">
            <input type="text"
                className="form-control" 
                value={newTaskName} 
                onChange={updatenewTaskValue}/>
            <button className="btn btn-primary mt-1"
                onClick={createNewTask}>Add
            </button>    
        </div>
    )
}