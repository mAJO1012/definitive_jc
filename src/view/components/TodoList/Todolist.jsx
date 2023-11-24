import { Todoitem } from '../Todoitem/Todoitem'

export const Todolist = ({ todos, handleUpdateTodo, handleDeleteTodo, handleCompleteTodo, name, description, finishDate, isCompleted }) => {
  useEffect(() => {
    onReturn()
  }, [])

  const onReturn = (event) => {
    const { state, dispatch } = useContext(TaskContext)
    const [values, setValues] = useState({
      name: event.target.name,
      description: event.target.description,
      finishDate: event.target.finishDate,
      isCompleted: false,
      userId: state.user._Id
    })
    fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo?userId=', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    }).then((response) => {
      console.log(response)
      setValues(response.data)
    }).then((data) => {
      console.log(data)
      dispatch({ type: 'ADD_TODO', payload: data.todo })
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
          <th>Finalización</th>
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
