import React from 'react'
import './styles.scss';
import {FiCheckSquare } from 'react-icons/fi';

const TaskList = () => {
  return (
    <div className='taskList'>
      <h2>Minhas tasks</h2>
      <form>
        <input type="text" placeholder='Adicionar novo todo' />
        <button><FiCheckSquare/></button>
      </form>

    </div>
  )
}

export default TaskList