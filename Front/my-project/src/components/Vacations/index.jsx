import VacationCard from '../VacationCard'
import back from '../../assets/images/back-btn.svg'
import next from '../../assets/images/next-btn.svg'
import palmers from '../../assets/icons/palmers.svg'
import './styles.sass'

const Vacations = () => {
  return (
    <section className='vacation'>
      <div className='info-wrapper'>
          <img src={palmers} alt='palmer image' />
          <h2 className='vacation__title'>Best <span>vacation plan</span></h2>
          <p className='vacation__text'>Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offers! </p>
      </div>
      <div className='wrapper'>
          <button className='vacation__buttons-container--button'>
              <img src={back} alt='button icon' />
          </button>
          <button className='vacation__buttons-container--button'>
              <img src={next} alt='button icon' />
          </button>
      </div>
      <div className='vacation__gallery-container'>
        <VacationCard />
        <VacationCard />
        <VacationCard />
      </div>
    </section>
  )
}

export default Vacations
