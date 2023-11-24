import { IconTrash } from '@tabler/icons-react'
import { Todoupdate } from '../Todoupdate/Todoupdate'
import './Todoitem.css'

export const Todoitem = ({ todo, handleUpdateTodo, handleDeleteTodo, handleCompleteTodo }) => {
  return (
    <li>
      <span
        onClick={() => handleCompleteTodo(todo.userId)}
      >
        <label htmlFor='' className='container-done' />
      </span>
      <Todoupdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
      <button className='btn-delete' onClick={() => handleDeleteTodo(todo.user._Id)}><IconTrash color='black' size={36} /></button>
    </li>
  )
}
