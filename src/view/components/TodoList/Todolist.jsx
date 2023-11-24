import { Todoitem } from '../Todoitem/Todoitem'

export const Todolist = ({ todos, handleUpdateTodo, handleDeleteTodo, handleCompleteTodo }) => {
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
          <Todoitem />
        </tr>
        <tbody>
          <tr>
            <td>.</td>
            <td>.</td>
            <td>.</td>
            <td>.</td>
          </tr>
        </tbody>
      </div>
    </ul>
  )
}
