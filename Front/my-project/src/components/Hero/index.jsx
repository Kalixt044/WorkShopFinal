import person from '../../assets/images/turist-banner.svg'
import { BiChevronDown } from 'react-icons/bi'
import './styles.sass'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='wrapper'>
        <div className='hero__banner'>
          <img className='hero__banner--image' src={person} alt='' />
        </div>
        <div className='hero__info'>
          <h1 className='hero__info--title'>Get started your exciting <span>journey</span> with us.</h1>
          <p className='hero__info--text'>A Team of experienced tourism professionals will provide you with the best advice and tips for your desire place.</p>
          <button className='hero__info--button'>Discover</button>
        </div>
      </div>
      <form className='hero__form'>
        <div className='hero__form--field-wrapper location'>
          <label className='flex items-center' htmlFor='location'>Location <span><BiChevronDown /></span></label>
          <input type='text' id='location' autoComplete='off' placeholder='Where are you going' />
        </div>
        <div className='hero__form--field-wrapper date'>
          <label className='flex items-center' htmlFor='date'>Date <span><BiChevronDown /></span></label>
          <input type='text' id='date' autoComplete='off' placeholder='When you will go' />
        </div>
        <div className='hero__form--field-wrapper guest'>
          <label className='flex items-center' htmlFor='guest'>Guest <span><BiChevronDown /></span></label>
          <input type='text' id='guest' autoComplete='off' placeholder='Number of guest' />
        </div>
        <button className='hero__form--button'>Explore Now</button>
      </form>
    </section>
  )
}

export default Hero
