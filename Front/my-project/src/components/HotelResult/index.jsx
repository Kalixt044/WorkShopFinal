import PropTypes from 'prop-types'
import './styles.sass'

const HotelResult = ({ children }) => {
  HotelResult.propTypes = {
    children: PropTypes.array
  }
  return (
    <section className='result-container'>
      { children }
    </section>
  )
}

export default HotelResult
