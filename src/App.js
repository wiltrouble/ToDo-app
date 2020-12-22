import { useState, useEffect } from "react";
import { TaskRow } from './components/TaskRow'
import { TaskBanner } from './components/TaskBanner'
import { TaskCreator } from './components/TaskCreator'
import { VisibilityControl } from './components/VisibilityControl'

function App() {

  const [username, setUserName] = useState('wiltrouble')
  const [taskItems, setTaskItems] = useState([
    {
      name: 'task one', done: false
    },
    {
      name: 'task two', done: false
    },
    {
      name: 'task three', done: true
    },
    {
      name: 'task four', done: false
    }
  ])

  const [showCompleted, setShowCompleted] = useState(true)

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data != null ) {
      setTaskItems(JSON.parse(data))
    } else {
      setUserName('Wilson')
      setTaskItems([
        {
          name: 'task onea', done: false
        },
        {
          name: 'task twob', done: false
        },
        {
          name: 'task threec', done: true
        },
        {
          name: 'task fourd', done: false
        }
      ])
      setShowCompleted(true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems])

  const createNewTask = taskName => {
    if (!taskItems.find(t => t.name === taskName) && taskName != '') {
      setTaskItems([...taskItems, { name: taskName, done: false }])
    }
  }

  const toggleTask = Task =>
    setTaskItems(taskItems.map(t => (t.name === Task.name ? { ...t, done: !t.done } : t)))

  const taskTableRows = (doneValue) => taskItems
    .filter(task => task.done === doneValue)
    .map(task => (
    <TaskRow task={task} key={task.name} toggleTask={toggleTask}></TaskRow>
  ))


  return (
    <div>
      <TaskBanner username={username} taskItems={taskItems} ></TaskBanner>
      <div className="container">
        <TaskCreator callback={createNewTask}></TaskCreator>
        <table className="table table-striped table-border">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>
            {taskTableRows(false)}
          </tbody>
        </table>
        <div className="bg-secondary text-white text-center p-2">
          <VisibilityControl description="Completed tasks"
            isChecked={showCompleted}
            callback={checked => setShowCompleted(checked)}></VisibilityControl>
        </div>
        {
          showCompleted && (
            <table className="table striped table-bordered">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Done</th>
                </tr>
              </thead>
              <tbody>
                {taskTableRows(true)}
              </tbody>
            </table>
          )
        }
      </div>
    </div>
  );
}

export default App;
