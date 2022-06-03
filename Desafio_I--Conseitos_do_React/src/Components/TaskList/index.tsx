import React , {useState} from 'react'
import './styles.scss';
import {FiCheckSquare, FiTrash } from 'react-icons/fi';

interface Task{
  id: number;
  title: string;
  isComplete: boolean;
}

const TaskList = () => {

  const [title, setTitle] = useState<string>('');
  const [tasks,setTasks] = useState<Task[]>([]);

  function createNewTask(title:string){
    const data={
      id: 12,
      title: title,
      isComplete: true,
    }
    setTasks([...tasks, data]);
  }
  return (
    <div className='taskList'>
      <h2>Minhas tasks</h2>
      <form onSubmit={(event)=>{event.preventDefault()}}>
        <input type="text" placeholder='Adicionar novo todo' 
          onChange={({target})=> setTitle(target.value)}
        />
        <button onClick={()=>createNewTask(title)}><FiCheckSquare/></button>
      </form>
      <div className='tasks'>
        {tasks.map(task=>(
          <p key={task.id}>
            <span>
              <input type="checkbox" />
              <p>{task.title}</p>
            </span>
            <FiTrash/>
        </p>
        ))}
      </div>
      
    </div>
  )
}

export default TaskList