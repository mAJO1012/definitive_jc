import { useContext, useEffect } from 'react'
import { ToDo } from '../../pages/ToDo/ToDo'
import { TaskContext } from '../context/tasks'

export const Todolist = () => {
  const { state, dispatch } = useContext(TaskContext)

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
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Finalización</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {
          state.todos && state.todos.map(todo => (
            <ToDo key={todo._id} todo={todo} />
          ))
        }
        </tr>
      </tbody>
    </table>
  )
}
