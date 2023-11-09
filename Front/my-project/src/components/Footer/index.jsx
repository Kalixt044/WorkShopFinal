import { Link } from 'react-router-dom'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi'
import { Collapse, Divider } from 'antd'
import logo from '../../assets/icons/logo.svg'
import './styles.sass'

const items = [
  {
    key: '1',
    label: 'Company',
    children: <ul className='footer-ist'>
                <li>About</li>
                <li>Carrers</li>
                <li>Logistic</li>
                <li>Privacy & Policy</li>
              </ul>
  },
  {
    key: '2',
    label: 'Contact',
    children: <ul className='footer-list'>
                <li>Help/FAQ</li>
                <li>Press</li>
                <li>Affilates</li>
              </ul>
  },
  {
    key: '3',
    label: 'More',
    children: <ul className='footer-list'>
                <li>Press Centre</li>
                <li>Our Blog</li>
                <li>Low fare tips</li>
              </ul>
  }
]

const Footer = () => {

  return (
    <footer className='footer'>
      <section className='footer__social-network'>
        <div className='footer__social-network--logo'>
          <h3 className='title'>Trabook</h3>
          <img className='image' src={logo} alt='logo icon' />
        </div>
        <p className='footer__social-network--text'>Book your trip in minute, get full Control for much longer.</p>
        <div className='footer__social-network--network'>
          <button className='social-media'>
            <BiLogoFacebook />
          </button>
          <button className='social-media instagram'>
            <BiLogoInstagram />
          </button>
          <button className='social-media'>
            <AiOutlineTwitter />
          </button>
        </div>
      </section>
      <section className='footer__info'>
        <Collapse items={items} defaultActiveKey={['1']} />
      </section>
      <section className='footer__terms'>
        <p className='footer__terms--text'>Copyright, Trabook 2022. All rights reserved.</p>
        <p className='footer__terms--text'>Terms & Conditions</p>
      </section>
    </footer>
  )
}

export default Footer
