import { IconEdit, IconTrash } from '@tabler/icons-react'
import './ToDo.css'
import { useTodo } from '../../hooks/useTodo'
import { Todoitem } from '../../components/Todoitem/Todoitem'
import { ToDoAdd } from '../ToDoAdd/ToDoAdd'
import { Todolist } from '../../components/TodoList/Todolist'

export const icono = () => {
  return <IconEdit />
}

export const icono2 = () => {
  return <IconTrash />
}

export const ToDo = () => {
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
          <span>Pendientes: {pendingTodosCount}</span>
          <span>N° de tareas: {todosCount}</span>
        </div>
      </section>
      <tr>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Fecha de finalización</th>
        <th>Estado</th>
      </tr>
      <div>
        <ToDoAdd handleNewTodo={handleNewTodo} />
      </div>
      <Todolist
        todos={todos}
        handleUpdateTodo={handleUpdateTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
      />
      <Todoitem />
    </>
  )
}
