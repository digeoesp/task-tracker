import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'doc appoint',
      day: 'feb 5thcat 230',
      reminder: true,
    },
    {
      id: 2,
      text: 'xsaxs',
      day: 'fxasxsa30',
      reminder: true,
    },
    {
      id: 3,
      text: 'xddacdacsasaxs',
      day: 'fxscascsacascscsacsaasxsa30',
      reminder: true,
    },

  ])
  //delete task 
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No tasks to display'}
    </div>
  );
}
//..filter high order array method
export default App;
