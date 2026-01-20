import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <h1>Page not found</h1>
      <p>Страница не найдена</p>
      <Link to="/" replace>
        На главную
      </Link>
    </>
  )
}

export default NotFound
