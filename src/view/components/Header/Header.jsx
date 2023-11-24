import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <h1>Gestión de tareas</h1>

      <ul>
        <li><Link to='/'>Cerrar Sesión</Link></li>
        <li><Link to='/todoAdd'>Agregar tarea</Link></li>
        <li><Link to='/todolist'>Tareas</Link></li>
      </ul>
    </header>
  )
}
