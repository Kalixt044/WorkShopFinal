import person from '../../assets/images/person.svg'
import airplanes from '../../assets/icons/airplanes3.svg'
import back from '../../assets/images/back-btn.svg'
import next from '../../assets/images/next-btn.svg'
import './styles.sass'

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us__wrapper">
        <img className="airplanes" src={airplanes} alt="airplanes image" />
        <div className="about-us__left">
          <h2 className="about-us__left--title">What people say <span>about Us.</span></h2>
          <p className="about-us__left--text">Our Clients send us bunch of smilies with our services and we love them.</p>
          <div className="about-us__left--buttons-container">
            <button className="button">
              <img src={back} alt="button icon" />
            </button>
            <button className="button ms-5">
              <img src={next} alt="button icon" />
            </button>
          </div>
        </div>
        <article className="about-us__right">
          <img className="about-us__right--image"  src={person} alt="profile picture" />
          <div className="about-us__right--cards-container">
              <div className="card-style front">
                <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                <div className="name-info">
                  <h3>Mike taylor</h3>
                  <span>Lahore, Pakistan</span>
                </div>
              </div>
              <div className="card-style back">
                <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                <div className="name-info">
                  <h3>Chris Thomas</h3>
                  <span>CEO of Red Button</span>
                </div>
              </div>
            </div>
        </article>
      </div>
    </section>
  )
}

export default AboutUs
