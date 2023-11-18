import travel from '../../assets/images/travel-luggage.jpg'

const SignIn = () => {
  return (<>
    <main className='sign-up-wrapper'>
      <img className='sign-up-wrapper__image' src={travel} alt='luggage, books and glasses picture in a orange backgrpund' />
      <form className='sign-up'>
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
            type='text'
            placeholder='Enter your email'
            id='input-email'
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
      <form className='sign-up-desktop'>
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
            type='text'
            placeholder='Enter your email'
            id='input-email'
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
          />
        </div>
        <button className='sign-up__form-button'>Login</button>
      </form>
    </main>
  </>)
}

export default SignIn
