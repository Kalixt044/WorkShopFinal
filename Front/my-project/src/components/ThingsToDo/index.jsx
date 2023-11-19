import PropTypes from 'prop-types'
import airplanes from '../../assets/icons/airplanes2.svg'
import './styles.sass'

const ThingsToDo = ({ children }) => {
  ThingsToDo.propTypes = {
    children: PropTypes.array
  }
  return (
    <section className='things'>
      <div className='info-wrapper'>
        <img src={airplanes} alt='palmer image' />
        <h2 className='things__title'>Things you need <span>to do</span></h2>
        <p className='things__text'>We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford.</p>
      </div>
      <div className='things__cards-container'>
        { children }
      </div>
    </section>
  )
}

export default ThingsToDo
