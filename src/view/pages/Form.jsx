import { Link } from 'react-router-dom'
import './Form.css'
import { useContext, useState } from 'react'
import { TaskContext } from '../components/context/tasks'

export function Form () {
  const { dispatch } = useContext(TaskContext)
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''

  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleForm = (event) => {
    event.preventDefault()
    console.log(values)
    fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    }).then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'SIGNUP_USER', payload: data.user })
      })
  }
  return (
    <form onSubmit={handleForm}>
      <div className='container-form'>
        <div className='information'>
          <div className='info-childs'>
            <h2>Bienvenido</h2>
            <p>¿Ya tienes un usuario creado? Inicia sesión</p>
            <Link to='/'><button type='submit'>Iniciar Sesión</button></Link>
          </div>
        </div>
        <div className='form-information'>
          <div className='form-information-childs'>
            <div className='text'>
              <h2 className='crear_cuenta'>Crear una cuenta</h2>
            </div>

            <div>
              <input type='text' name='firstName' defaultValue={values.firstName} placeholder='Nombre' onChange={handleInputChange} />
            </div>
            <div>
              <input type='text' name='lastName' defaultValue={values.lastName} placeholder='Apellido' onChange={handleInputChange} />
            </div>
            <div>
              <input type='text' name='email' defaultValue={values.email} placeholder='Correo electrónico' onChange={handleInputChange} />
            </div>
            <div>
              <input type='password' name='password' defaultValue={values.password} placeholder='Contraseña' onChange={handleInputChange} />
            </div>

            <div>
              <button type='submit' name='btn' id='btn_enviar'>Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </form>

  )
}
