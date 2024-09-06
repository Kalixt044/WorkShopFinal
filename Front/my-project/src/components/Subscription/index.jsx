import ellipse from '../../assets/icons/ellipse.svg'
import palmers from '../../assets/icons/palmers-white.svg'
import { BsEnvelope } from 'react-icons/bs'
import './styles.sass'

const Subscription = () => {
  return (
    <section className='subscription'>
      <img 
        className='subscription__image-palmers' 
        src={palmers} 
        alt='palmers icon' 
      />
      <img 
        className='subscription__image-ellipse' 
        src={ellipse} 
        alt='ellipse image' 
      />
      <form className='subscription__form'>
        <h3 className='subscription__form--title'>Subscribe and get exclusive deals & offer</h3>
        <div className='subscription__form--wrapper'>
          <label htmlFor='subscribe-input' className='label'>
            <BsEnvelope />
          </label>
          <input 
            className='input'
            type='text' 
            id='subscribe-input' 
            placeholder='Enter your mail' 
          />
          <button className='button' type='submit'>Subscribe</button>
        </div>
      </form>
    </section>
  )
}

export default Subscription
