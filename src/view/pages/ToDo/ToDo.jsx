import { IconTrash } from '@tabler/icons-react'
import './ToDo.css'
import { useTodo } from '../../hooks/useTodo'
import { ToDoAdd } from '../ToDoAdd/ToDoAdd'
import { Todolist } from '../../components/TodoList/Todolist'
export const icono2 = () => {
  return <IconTrash />
}

export const ToDo = ({ todo }) => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo
  } = useTodo()

  return (
    <>
      <section className='table__header'>
        <div>
          <span>N° de tareas: {todosCount}</span>
          <span>Pendientes: {pendingTodosCount}</span>
        </div>
      </section>
      <Todolist
        todos={todos}
        handleUpdateTodo={handleUpdateTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
      />
      <div>
        <ToDoAdd handleNewTodo={handleNewTodo} />
      </div>
      <tr>
        <td>{todo && todo.name && todo.name}</td>
        <td>{todo && todo.description && todo.description}</td>
        <td>{todo && todo.finisDate && todo.finisDate}</td>
        <td>
          {/* <button onClick={() => dispatch({ type: 'SET_CURRENT_PRODUCT', payload: todo })}>Editar</button> */}
          {/* <button onClick={handleDeleteTodo}>Eliminar</button> */}
        </td>
      </tr>
    </>
  )
}
