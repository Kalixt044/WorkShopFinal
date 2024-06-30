import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Drawer } from 'antd'
import { HiMenuAlt3 } from 'react-icons/hi'
import logo from '../../assets/icons/logo.svg'
import './styles.sass'

const Header = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  return (<>
    <header className='header mobile w-full flex justify-between items-center'>
      <div className='header__logo-container flex cursor-pointer' onClick={() => navigate('/')}>
        <h3 className='header__logo-container--title'>Trabook</h3>
        <img className='header__logo-container--image' src={logo} alt='logo icon' />
      </div>
      <button className='header__menu' onClick={showDrawer}>
        <HiMenuAlt3 />
      </button>
    </header>
    <header className='header desktop'>
      <div className='header__logo-container flex justify-start'>
        <Link to='/'>
          <h3 className='header__logo-container--title'>Trabook</h3>
        </Link>
        <img className='header__logo-container--image' src={logo} alt='logo icon' />
      </div>
      <ul className='navigation-desktop flex'>
        <li className='navigation-desktop__item'>Home</li>
        <li className='navigation-desktop__item'>About</li>
        <li className='navigation-desktop__item'>Destination</li>
        <li className='navigation-desktop__item'>Tour</li>
        <li className='navigation-desktop__item'>Blog</li>
      </ul>
      <div className='action-desktop'>
        <button 
          className='action-desktop__button login'
          onClick={() => navigate('/login')}
        >
          Login
        </button>
        <button 
          className='action-desktop__button register'
          onClick={() => navigate('/register')}
        >
          Sign up
        </button>
      </div>
    </header>
    <Drawer placement="right" onClose={onClose} open={open}>
      <div className='navigation'>
        <Link to='/'>
          <p>Home</p>
        </Link>
        <p>About</p>
        <p>Destination</p>
        <p>Tour</p>
        <p>Blog</p>
      </div>
      <div className='action'>
        <button 
          className='action__button login'
          onClick={() => navigate('/login')}
        >
          Login
        </button>
        <button 
          className='action__button register'
          onClick={() => navigate('/register')}
        >
          Sign up
        </button>
      </div>
    </Drawer>
  </>)
}

export default Header
