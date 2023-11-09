import { useState } from 'react'
import { Drawer } from 'antd'
import { HiMenuAlt3 } from 'react-icons/hi'
import logo from '../../assets/icons/logo.svg'
import './styles.sass'

const Header = () => {
  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  return (<>
    <header className='header mobile w-full flex justify-between items-center'>
      <div className='header__logo-container flex'>
        <h3 className='header__logo-container--title'>Trabook</h3>
        <img className='header__logo-container--image' src={logo} alt='logo icon' />
      </div>
      <button className='header__menu' onClick={showDrawer}>
        <HiMenuAlt3 />
      </button>
    </header>
    <header className='header desktop'></header>
    <Drawer placement="right" onClose={onClose} open={open}>
      <div className='navigation'>
        <p>Home</p>
        <p>About</p>
        <p>Destination</p>
        <p>Tour</p>
        <p>Blog</p>
      </div>
      <div className='action'>
        <button className='action__button login'>Login</button>
        <button className='action__button sign-up'>Sign up</button>
      </div>
    </Drawer>
  </>)
}

export default Header
