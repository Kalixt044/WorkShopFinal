import person from '../../assets/images/person.svg'
import airplanes from '../../assets/icons/airplanes3.svg'
import back from '../../assets/images/back-btn.svg'
import next from '../../assets/images/next-btn.svg'
import './styles.sass'

const AboutUs = () => {
  return (
    <section className='about-us'>
      <img className='about-us__image' src={airplanes} alt='airplanes icon' />
      <div className='about-us__description'>
        <h2 className='about-us__title'>What people say <span>about us.</span></h2>
        <p className='about-us__text'>Our Clients send us bunch of smilies with our services and we love them.</p>
        <div className='about-us__buttons-container'>
          <button className='about-us__buttons-container--button'>
            <img src={back} alt='button icon' />
          </button>
          <button className='about-us__buttons-container--button'>
            <img src={next} alt='button icon' />
          </button>
        </div>
      </div>
      <div className='about-us__cards'>
        <img className='about-us__cards--image' src={person} alt='profile picture' />
        <article className='about-us__cards--card front'>
          <p className='paragraph'>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
          <div className='info-container'>
            <span className='info-container__name'>Mike Taylor</span>
            <span className='info-container__location'>Lahore, Pakistan</span>
          </div>
        </article>
        <article className='about-us__cards--card back'>
          <p className='paragraph'>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
          <div className='info-container'>
            <span className='info-container__name'>Chris Thomas</span>
            <span className='info-container__location'>CEO of Red Button</span>
          </div>
        </article>
      </div>
    </section>
  )
}

export default AboutUs
