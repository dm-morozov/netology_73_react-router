import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const { pathname } = useLocation()

  return (
    <header>
      <Link to="/" style={{ fontWeight: pathname === '/' ? 'bold' : 'normal' }}>
        Главная
      </Link>{' '}
      |{' '}
      <Link
        to="about"
        style={{ fontWeight: pathname === '/about' ? 'bold' : 'normal' }}
      >
        О нас
      </Link>{' '}
      | <Link to="drive">Меню гоночного такси</Link> |{' '}
      <Link to="crud">CRUD</Link>
    </header>
  )
}

export default Header
