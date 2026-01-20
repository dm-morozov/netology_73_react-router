import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import MainLayout from './layouts/MainLayout'
import User from './pages/User'
import NotFound from './pages/NotFound'
import LayoutForDrive from './layouts/LayoutForDrive'
import HomeForDrive from './components/NavigationMenu/HomeForDrive'
import Drift from './components/NavigationMenu/Drift'
import Timeattack from './components/NavigationMenu/Timeattack'
import Forza from './components/NavigationMenu/Forza'
import PostList from './components/CRUD/PostList'
import PostNew from './components/CRUD/PostNew'
import PostView from './components/CRUD/PostView'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="user/:id" element={<User />} />

        {/* Drive */}
        <Route path="drive" element={<LayoutForDrive />}>
          <Route index element={<HomeForDrive />} />
          <Route path="drift" element={<Drift />} />
          <Route path="timeattack" element={<Timeattack />} />
          <Route path="forza" element={<Forza />} />
        </Route>

        {/* CRUD */}
        <Route path="crud">
          <Route index element={<PostList />} />
          <Route path="posts">
            <Route path="new" element={<PostNew />} />
            <Route path=":id" element={<PostView />} />
          </Route>
        </Route>
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
