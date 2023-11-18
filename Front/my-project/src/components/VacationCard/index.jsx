import PropTypes from 'prop-types'
import vacation from '../../assets/images/vacation-2.svg'
import pointer from '../../assets/icons/point.svg'
import star from '../../assets/icons/star.svg'
import './styles.sass'

const VacationCard = ({ details }) => {
  VacationCard.propTypes = {
    details: PropTypes.object
  }
  return (
    <div className='vacation-card'>
      <img src={vacation} className='vacation-card__image' alt='...' />
      <div className='vacation-card__body'>
        <div className='w-full flex justify-between'>
          <h5 className='vacation-card__body--title'>{details?.pais_Name}, {details?.nombre_ciudad}</h5>
          <span className='vacation-card__body--text'>$5,42k</span>
        </div>
        <div className='trip-rank w-full flex justify-between'>
            <div className='trip flex justify-between items-center'>
              <img src={pointer} alt='pointer icon' />
              <span className=''>10 Days Trip</span>
            </div>
            <div className='rank flex justify-between items-center'>
              <img className='rank__image' src={star} alt='star icon' />
              <span className='rank__span'>{details?.stars}</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default VacationCard

