import PropTypes from 'prop-types'
import back from '../../assets/images/back-btn.svg'
import next from '../../assets/images/next-btn.svg'
import './styles.sass'

const Deals = ({ children }) => {
  Deals.propTypes = {
    children: PropTypes.array
  }

  return (
    <section className='deals-discount'>
      <h2 className='deals-discount__title'>Exclusive <span>deals & discounts</span></h2>
      <p className='deals-discount__text'>Discover our fantastic early booking discounts & start planning your journey.
      </p>
      <div className='deals-discount__gallery-container flex'>
        { children }
      </div>
      <div className='deals-discount__buttons-container flex justify-between'>
        <button className='deals-discount__buttons-container--button'>
          <img src={back} alt='button icon' />
        </button>
        <button className='deals-discount__buttons-container--button'>
          <img src={next} alt='button icon' />
        </button>
      </div>
    </section>
  )
}

export default Deals
