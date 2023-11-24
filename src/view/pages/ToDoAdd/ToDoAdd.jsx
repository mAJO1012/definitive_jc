import { IconArrowLeft } from '@tabler/icons-react'
import './ToDoAdd.css'
import { useContext } from 'react'
import { TaskContext } from '../../components/context/tasks'

export const icono = () => {
  return <IconArrowLeft />
}

export const ToDoAdd = () => {
  const { dispatch, state } = useContext(TaskContext)

  const onFormSubmit = (event) => {
    event.preventDefault()
    fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo', {
      method: 'POST',
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
      dispatch({ type: 'ADD_TODO', payload: data.todo })
    })
  }
  return (
    <form onSubmit={onFormSubmit}>
      <div className='container'>
        <div className='form-info'>
          <div className='form-info-childs'>
            <div className='text'>
              <h3 className='crear_cuenta'>¡Hola! Aquí puedes agregar una tarea</h3>
            </div>

            <div>
              <label htmlFor='nombre'>Nombre</label>
              <input id='nombre' type='text' name='name' placeholder='Nombre' />
            </div>
            <div>
              <label htmlFor='desc'>Descripción</label>
              <input id='desc' type='text' name='description' placeholder='Descripción' />
            </div>
            <div>
              <label htmlFor='f_f'>Fecha de finalización</label>
              <input id='f_f' type='date' name='finishDate' placeholder='Fecha de finalización' />
            </div>

            <div>
              <button type='submit' name='btn' id='btn_enviar'>Agregar</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
