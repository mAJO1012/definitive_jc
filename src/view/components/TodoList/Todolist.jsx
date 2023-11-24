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
    </ul>
  )
}
