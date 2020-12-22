import React, { useState } from 'react'

export const TaskCreator = props => {

    const [newTaskName, setNewtaskName] = useState('')

    const updatenewTaskValue = e => setNewtaskName(e.target.value)

    const createNewTask = () => {
        props.callback(newTaskName);
        setNewtaskName('')
    }

    return (
        <div className="row">
            <div className="col-lg-10 col-md-6">
                <div className="my-1">
                    <input type="text"
                        className="form-control"
                        value={newTaskName}
                        onChange={updatenewTaskValue} />
                </div>
            </div>
            <div className="col-lg-2 col-md-6">
                <button className="btn btn-primary mt-1"
                        onClick={createNewTask}>Add Task
                </button>
            </div>
        </div>
    )
}