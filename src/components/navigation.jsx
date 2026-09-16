import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/catalogue">Каталог</NavLink>
      <NavLink to="/honey">Мёд</NavLink>
      <NavLink to="/production">Производство</NavLink>
      <NavLink to="/contacts">Контакты</NavLink>
    </nav>
  )
}

export default Navigation