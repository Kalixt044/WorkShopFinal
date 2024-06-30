import { Outlet } from 'react-router'
import Header from '../Header'
import Footer from '../Footer'

const index = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default index
