// import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import travel from '../../assets/images/travel-luggage.jpg'
import { createUser } from '../../service/userService'
import './styles.sass'

const SignUp = () => {
  const { register, handleSubmit } = useForm()
  // const navigate = useNavigate()

  const onSubmit = async ( userInfo ) => {
    console.log(userInfo)
    await createUser({ ...userInfo })
    // navigate('/login')
  }

  return (<>
    <main className='sign-up-wrapper'>
      <img className='sign-up-wrapper__image' src={travel} alt='luggage, books and glasses picture in a orange background' />
      <form 
        className='sign-up'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className='sign-up__title'>Create your <span>account</span></h2>
        <div className='input-wrapper'>
          <label
            className='sign-up__label'
            htmlFor='input-name'
          >
            Name
          </label>
          <input
            className='sign-up__input'
            type='text'
            placeholder='Enter your name'
            id='input-name'
            name='username'
            { ...register('username') }
          />
        </div>
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
        <button className='sign-up__form-button'>Create account</button>
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
      >
        <h2 className='sign-up__title'>Create your <span>account</span></h2>
        <div className='input-wrapper'>
          <label
            className='sign-up__label'
            htmlFor='input-name'
          >
            Name
          </label>
          <input
            className='sign-up__input'
            type='text'
            placeholder='Enter your name'
            id='input-name'
            name='username'
            { ...register('username') }
          />
        </div>
        <div className='input-wrapper'>
          <label
            className='sign-up__label'
            htmlFor='input-email'
          >
            Email address
          </label>
          <input
            className='sign-up__input'
            type='text'
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
            type='text'
            placeholder='Enter your password'
            id='input-password'
            name='password'
            { ...register('password') }
          />
        </div>
        <button className='sign-up__form-button'>Create account</button>
      </form>
    </main>
  </>)
}

export default SignUp
