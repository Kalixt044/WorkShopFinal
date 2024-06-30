import { useCallback, useEffect, useState } from 'react'
import { fetchHotelsByParams } from '../../service/hotelsService'
import DealCard from '../DealCard'
import back from '../../assets/images/back-btn.svg'
import next from '../../assets/images/next-btn.svg'
// import image1 from '../../assets/images/deal-discount-image1.svg'
// import image2 from '../../assets/images/deal-discount-image2.svg'
// import image3 from '../../assets/images/deal-discount-image3.svg'
// import image4 from '../../assets/images/deal-discount-image4.svg'
import './styles.sass'

// const dealsList = [
//   {
//     image: image1,
//     city: 'Madrid',
//     country: 'Spain',
//     rank: '4.8',
//     oldPrice: '950', 
//     newPrice: '850'
//   },
//   {
//     image: image2,
//     city: 'Firenze',
//     country: 'Italy',
//     rank: '4.5',
//     oldPrice: '850', 
//     newPrice: '750'
//   },
//   {
//     image: image3,
//     city: 'Paris',
//     country: 'France',
//     rank: '4.4',
//     oldPrice: '699', 
//     newPrice: '599'
//   },
//   {
//     image: image4,
//     city: 'London',
//     country: 'UK',
//     rank: '4.8',
//     oldPrice: '950', 
//     newPrice: '850'
//   }
// ]

const Deals = () => {
  const [hotels, setHotels] = useState([])
  
  const getHotels = useCallback(() => {
    fetchHotelsByParams({ limit: 3 })
    .then(response => setHotels(response))
  }, [])
  
  useEffect(() => {
    getHotels()
  }, [getHotels])
  return (
    <section className='deals-discount'>
      <h2 className='deals-discount__title'>Exclusive <span>deals & discounts</span></h2>
      <p className='deals-discount__text'>Discover our fantastic early booking discounts & start planning your journey.
      </p>
      <div className='deals-discount__gallery-container flex'>
        {
          hotels.map((item, index) => (
            <div key={index} className='m-2'>
              <DealCard details={item} />
            </div>
          ))
        }
      </div>
      <div className='deals-discount__buttons-container flex justify-between'>
        <button className='deals-discount__buttons-container--button'>
          <img src={back} alt='button icon' />
        </button>
        <button className='deals-discount__buttons-container--button'>
          <img src={next} alt='button icon' />
        </button>
      </div>
    </section>
  )
}

export default Deals
