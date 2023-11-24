import { useState, useEffect, useContext } from 'react'
import { Todoitem } from '../Todoitem/Todoitem'
import { TaskContext } from '../context/tasks'

export const Todolist = ({ todos, handleUpdateTodo, handleDeleteTodo, handleCompleteTodo }) => {
  const { dispatch } = useContext(TaskContext)
  const { name, setName } = useState([])
  const { description, setDescription } = useState([])
  const { finishDate, setFinishDate } = useState([])

  useEffect(() => {
    Todolist()
  }, [])

  const Todolist = (event) => {
    fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/user/auth', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        description,
        finishDate
      })
    }).then((data) => {
      console.log(data)
      dispatch({ type: 'ADD_TODO', payload: data.user })
    })
  }

  return (
    <ul>
      {todos.map(todo => (
        <Todoitem
          key={todo.userId}
          todo={todo}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      ))}
      <div>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Fecha de finalización</th>
          <th>Estado</th>
        </tr>
        <tbody>
          <tr>
            <td>{setName}</td>
            <td>{setDescription}</td>
            <td>{setFinishDate}</td>
            <td>.</td>
          </tr>
        </tbody>
      </div>
    </ul>
  )
}
