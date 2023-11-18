import PropTypes from 'prop-types'
import star from '../../assets/icons/star.svg'
import location from '../../assets/icons/location.svg'
import './styles.sass'

const DealCard = ({ details }) => {
  DealCard.propTypes = {
    details: PropTypes.object
  }

  return (
    <article className='deal-card'>
      <img className='deal-card__image' src={details?.image} alt='' />
      <div className='card-body'>
        <div className='flex justify-between'>
            <h5 className='card-body__title'>{details?.nombre_ciudad}</h5>
            <div className='rank flex items-center gap-3'>
                <img className='rank__image' src={star} alt='star icon' />
                <span className='rank__span'>{details?.stars}</span>
            </div>
        </div>
        <div className='location-prices flex justify-between'>
            <div className='location flex items-center'>
                <img src={location} alt='location icon' />
                <span className='ps-4'>{details?.pais_Name}</span>
            </div>
            <div className='prices flex'>
                <span className='prices__old'>${details?.oldPrice}</span>
                <span className='prices__current'>${details?.newPrice}</span>
            </div>
        </div>
      </div>
    </article>
  )
}

export default DealCard
