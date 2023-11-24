import { ToDo } from '../../pages/ToDo/ToDo'
import { Todoitem } from '../Todoitem/Todoitem'

export const Todolist = ({ todos, handleUpdateTodo, handleDeleteTodo, handleCompleteTodo, todoList }) => {
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
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Finalización</th>
            <th>Estado</th>
            <Todoitem />
          </tr>
        </thead>
        <tbody>
          <tr>
            {
          todoList && todoList.map(todo => (
            <ToDo key={todo._id} todo={todoList} />
          ))
        }
          </tr>
        </tbody>
      </div>
    </ul>
  )
}
