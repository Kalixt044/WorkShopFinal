import PropTypes from 'prop-types'
import './styles.sass'

const ThingCard = ({ details }) => {
	ThingCard.propTypes = {
    details: PropTypes.object
  }

    return (
			<div className='card'>
				<img src={details.icon} className='card__image' alt='...' />
				<div className='card__body'>
					<h5 className='card__body--title'>{details.title}</h5>
					<p className='card__body--text'>{details.description}</p>
				</div>
			</div>
    )
}

export default ThingCard
