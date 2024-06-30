import PropTypes from 'prop-types'
import star from '../../assets/icons/star.svg'
import mapIcon from '../../assets/icons/map.svg'
import './styles.sass'

const HotelResultCard = ({ details }) => {
  HotelResultCard.propTypes = {
    details: PropTypes.object
  }
  return (
    <article className='hotel-card'>
      <section className='hotel-card__image-container'>
        <img className='hotel-card__image-container--image' src={details.img_url} alt='' />
      </section>
      <section className='hotel-card__information'>
        <div className='hotel-card__information--name-rank'>
          <h4 className='name'>{details.nombre_hotel}</h4>
          <div className='rank'>
            <img className='rank__icon' src={star} alt='' />
            <span className='rank__number'>{details.stars}.0</span>
            <span className='rank__description'>Wonderful</span>
          </div>
          <div className='location'>
            <img className='location__icon' src={mapIcon} alt='' />
            <span className='location__city'>{details.nombre_ciudad}</span>
          </div>
        </div>
        <div className='hotel-card__information--price-guest'>
          <p className='guest'>Price for night, 2 guests</p>
          <h2 className='price'>USD {details.pricing}</h2>
        </div>
      </section>
      
    </article>
  )
}

export default HotelResultCard
