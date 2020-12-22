import React from 'react'

export const TaskBanner = props => (
    <h4 className="bg-primary text-white text-center p-4">
        {
            `${props.username}'s Task App ${props.taskItems
                .filter(t => !t.done).length} tasks to do`
        }
    </h4>
)