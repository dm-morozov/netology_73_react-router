import { NavLink } from 'react-router-dom'

const HeaderDrive = () => {
  return (
    <nav className="menu">
      <NavLink
        to=""
        end // это значит что роут по умолчанию
        className={({ isActive }) =>
          isActive ? 'menu__item menu__item-active' : 'menu__item'
        }
      >
        Главная
      </NavLink>

      <NavLink
        to="drift"
        className={({ isActive }) =>
          isActive ? 'menu__item menu__item-active' : 'menu__item'
        }
      >
        Дрифт-такси
      </NavLink>

      <NavLink
        to="timeattack"
        className={({ isActive }) =>
          isActive ? 'menu__item menu__item-active' : 'menu__item'
        }
      >
        Time Attack
      </NavLink>

      <NavLink
        to="forza"
        className={({ isActive }) =>
          isActive ? 'menu__item menu__item-active' : 'menu__item'
        }
      >
        Forza Karting
      </NavLink>
    </nav>
  )
}

export default HeaderDrive
