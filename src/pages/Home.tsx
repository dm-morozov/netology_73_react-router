import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <h1>Главная</h1>
      <button onClick={() => navigate('/about')}>About Us</button>

      <ul>
        <li>
          <Link to="/user/1">Пользователь 1</Link>
        </li>
        <li>
          <Link to={{ pathname: '/user/42', search: '?page=1&limit=10' }}>
            Пользователь 42
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Home
