import React, { useState } from 'react'
import back from '../../assets/images/back-btn.svg'
import next from '../../assets/images/next-btn.svg'
import './styles.scss'

const MAX_VISIBILITY = 3;

const Carousel = ({ children }) => {
  const [active, setActive] = useState(2)

  return (
    <div className='carousel'>
      {
        active > 0 && <button className='deals-discount__buttons-container--button nav left' onClick={() => setActive(i => i - 1)}><img src={back} alt='button icon' /></button>
      }
      {
        React.Children.map(children, (child, i) => (
          <div 
            className='card-container'
            style={{
              '--active': i === active ? 1 : 0,
              '--offset': (active - i) / 3,
              '--direction': Math.sign(active - i),
              '--abs-offset': Math.abs(active - i) / 3,
              'pointer-events': active === i ? 'auto' : 'none',
              'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
              'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'flex'
            }}
          >
            { child }
          </div>
        ))
      }
      {
        active > 0 && <button className='deals-discount__buttons-container--button nav right' onClick={() => setActive(i => i + 1)}><img src={next} alt='button icon' /></button>
      }
    </div>
  )
}

export default Carousel
