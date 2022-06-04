import React , {useEffect, useState} from 'react'
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
  
  useEffect(()=>{
    if(localStorage.getItem('tasks'))
    {
      const localTasks = JSON.parse(localStorage.getItem('tasks') || '');
      setTasks(localTasks);
    }
  },[]);

  function createNewTask(){
    const data={
      id: tasks.length,
      title: title,
      isComplete: false,
    }
    setTasks([...tasks, data]);
    localStorage.setItem('tasks',JSON.stringify([...tasks,data]));
  }

  function removeTask(id:number){
    const data = tasks.filter(task=>task.id!==id); 
    setTasks(data);
    localStorage.setItem('tasks',JSON.stringify(data));
  }
  return (
    <section className='taskList'>
      <h2>Minhas tasks</h2>
      <form onSubmit={(event)=>{event.preventDefault()}}>
        <input 
          type="text" 
          placeholder='Adicionar novo todo' 
          onChange={({target})=> setTitle(target.value)}
        />
        <button onClick={createNewTask}><FiCheckSquare/></button>
      </form>
      <div className='tasks'>
        {tasks.map(task=>(
          <p key={task.id}>
            <span>
              <input type="checkbox" 
                checked={task.isComplete} 
              />
              <p>{task.title}</p>
            </span>
            <FiTrash onClick={()=>removeTask(task.id)}/>
        </p>
        ))}
      </div>
      
    </section>
  )
}

export default TaskList