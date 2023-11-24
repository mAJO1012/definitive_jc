import { useContext, useState } from 'react'
import './Home.css'
import { Link, useNavigate } from 'react-router-dom'
import { TaskContext } from '../components/context/tasks'

export const Home = () => {
  const { dispatch } = useContext(TaskContext)
  const { error, setError } = useState(null)
  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault()
    fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/user/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: event.target.elements.email.value,
        password: event.target.elements.password.value
      })
    }).then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        window.alert(' Credenciales incorrectas ')
        throw new Error('Credenciales incorrectas')
      }
    }).catch(error => {
      setError(error)
    })
      .then((data) => {
        dispatch({ type: 'SIGNUP_USER', payload: data.user })
        navigate('/todo')
      })
  }
  return (
    <form onSubmit={handleLogin}>
      <div className='container-form'>
        <div className='information'>
          <div className='info-childs'>
            <h2>Bienvenido</h2>
            <p>¿No has creado un usuario? Regístrate</p>
            <Link to='/form'><button type='submit'>Registrarse</button></Link>
          </div>
        </div>
        <div className='form-information'>
          <div className='form-information-childs'>
            <div className='text'>
              <h2 className='crear_cuenta'>Iniciar Sesión</h2>
            </div>

            <div>
              <input name='email' type='text' placeholder='Correo electrónico' />
            </div>

            <div>
              <input name='password' type='password' placeholder='Contraseña' />
            </div>

            <div>
              <button type='submit' name='btn' id='btn_enviar'>Enviar</button>
            </div>

            {error && (
              <p>{error}</p>
            )}
          </div>
        </div>
      </div>

    </form>

  )
}
