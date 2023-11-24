import { IconTrash } from '@tabler/icons-react'
import './ToDo.css'
import { useTodo } from '../../hooks/useTodo'
import { ToDoAdd } from '../ToDoAdd/ToDoAdd'
import { Todolist } from '../../components/TodoList/Todolist'
import { useContext, useEffect } from 'react'
import { TaskContext } from '../../components/context/tasks'
export const icono2 = () => {
  return <IconTrash />
}

export const ToDo = ({ todo }) => {
  const { dispatch, state } = useContext(TaskContext)

  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo
  } = useTodo()

  useEffect(() => {
    todoGet()
  }, [])

  const todoGet = () => {
    fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo?userId=' + state.user._id, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'GET_TODO', payload: data.todos })
      })
  }

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
