import { Routes, Route } from 'react-router'
import Home from '../pages/Home'
import Layout from '../components/Layout'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />}/>
      </Route>
      <Route path='login' element={<SignIn />} />
      <Route path='register' element={<SignUp />} />
    </Routes>
  )
}

export default AppRoutes
