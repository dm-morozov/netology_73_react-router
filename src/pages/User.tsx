import { useLocation, useNavigate, useParams } from 'react-router-dom'

const User = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const { search } = useLocation()
  const params = new URLSearchParams(search)

  const page = Number(params.get('page') ?? '1')
  const limit = Number(params.get('limit') ?? '5')

  if (!id) {
    return <h1>Пользователь не найден</h1>
  }

  return (
    <>
      <h1>Пользователь</h1>
      <p>ID пользователя: {id}</p>
      <p>Страница: {page}</p>
      <p>Лимит: {limit}</p>
      <button onClick={() => navigate(-1)}>Назад</button>
    </>
  )
}

export default User
