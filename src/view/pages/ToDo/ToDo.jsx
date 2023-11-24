import { IconTrash } from '@tabler/icons-react'
import './ToDo.css'
import { useTodo } from '../../hooks/useTodo'
import { ToDoAdd } from '../ToDoAdd/ToDoAdd'
import { Todolist } from '../../components/TodoList/Todolist'

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
      <Todolist
        todos={todos}
        handleUpdateTodo={handleUpdateTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
      />
      <div>
        <ToDoAdd handleNewTodo={handleNewTodo} />
      </div>
    </>
  )
}
/* const list = () => {
    const { dispatch, state } = useContext(TaskContext)

    const [name, setName] = useState([])
    const [description, setDescription] = useState([])
    const [finishDate, setFinishDate] = useState([])

    useEffect(() => {
      Todolist()
    }, [])

    const Todolist = (event) => {
      fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/user/auth', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: event.target.elements.name.value,
          description: event.target.elements.description.value,
          finishDate: event.target.elements.finishDate.value,
          isCompleted: false,
          userId: state.user._id
        })
      }).then((data) => {
        console.log(data)
        dispatch({ type: 'ADD_TODO', payload: data.user })
      })
    } */
