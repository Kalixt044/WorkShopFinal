import { useForm } from 'react-hook-form'
import travel from '../../assets/images/travel-luggage.jpg'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const onSubmit = async ( userInfo ) => {
    console.log(userInfo)
    // navigate('/')
  }
  return (<>
    <main className='sign-up-wrapper'>
      <img className='sign-up-wrapper__image' src={travel} alt='luggage, books and glasses picture in a orange backgrpund' />
      <form 
        className='sign-up'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className='sign-up__title'>Login</h2>
        <div className='input-wrapper'>
          <label
            className='sign-up__label'
            htmlFor='input-email'
          >
            Email address
          </label>
          <input
            className='sign-up__input'
            type='email'
            placeholder='Enter your email'
            id='input-email'
            name='email'
            { ...register('email') }
          />
        </div>
        <div className='input-wrapper'>
          <label
            className='sign-up__label'
            htmlFor='input-password'
          >
            Password
          </label>
          <input
            className='sign-up__input'
            type='password'
            placeholder='Enter your password'
            id='input-password'
            name='password'
            { ...register('password') }
          />
        </div>
        <button className='sign-up__form-button'>Login</button>
      </form>
    </main>
    <main  className='sign-up-wrapper sign-desktop'>
      <img 
        className='sign-up-wrapper__image-desktop' 
        src={travel} 
        alt='luggage, books and glasses picture in a orange backgrpund' 
      />
      <form 
        className='sign-up-desktop'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className='sign-up__title'>Login</h2>
        <div className='input-wrapper'>
          <label
            className='sign-up__label'
            htmlFor='input-email-desk'
          >
            Email address
          </label>
          <input
            className='sign-up__input'
            type='email'
            placeholder='Enter your email'
            id='input-email-desk'
            name='email'
            { ...register('email') }
          />
        </div>
        <div className='input-wrapper'>
          <label
            className='sign-up__label'
            htmlFor='input-password-desk'
          >
            Password
          </label>
          <input
            className='sign-up__input'
            type='password'
            placeholder='Enter your password'
            id='input-password-desk'
            name='password'
            { ...register('password') }
          />
        </div>
        <button className='sign-up__form-button'>Login</button>
      </form>
    </main>
  </>)
}

export default SignIn
