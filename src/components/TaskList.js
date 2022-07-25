import {useEffect} from 'react'
import {useTasks} from '../context/TaskContext';

function TaskList() {

  const{tasks,getTasks} = useTasks();
  console.log(tasks)
  useEffect(() => {
    getTasks();
  }, []);

  return   <div>
  <h1>debug 1</h1>
     {
        tasks.map(task => (
          <div key={task.id}> 
             <h1>{task.name}</h1>
             <p>{JSON.stringify(task.done)}</p>
          </div>
        ))
     }
      </div>
      
  
}

export default TaskList