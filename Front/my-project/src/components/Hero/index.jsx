import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { fetchHotelsByParams } from '../../service/hotelsService'
import { BiChevronDown } from 'react-icons/bi'
import { DatePicker, Drawer } from 'antd'
import person from '../../assets/images/turist-banner.svg'
import './styles.sass'
import HotelResultCard from '../HotelResultCard'
import HotelResult from '../HotelResult'

const Hero = () => {
  const { register, handleSubmit } = useForm()
  const [hotelsByLocation, setHotelsByLocation] = useState([])
  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }

  const onChange = (date, dateString) => {
    // console.log(dateString)
    return {date, dateString}
  }
  const onSubmit = async ( search ) => {
    const fetchHotels = await fetchHotelsByParams({ pais: search.location })
    setHotelsByLocation(fetchHotels)
  }
  
  console.log(hotelsByLocation)
  return (<>
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
      <form 
        className='hero__form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='hero__form--field-wrapper location'>
          <label className='flex items-center' htmlFor='location'>Location <span><BiChevronDown /></span></label>
          <input 
            type='text' 
            id='location' 
            autoComplete='off' 
            placeholder='Where are you going' 
            name='location'
            { ...register('location') }
          />
        </div>
        <div className='hero__form--field-wrapper date'>
          <label className='flex items-center' htmlFor='date'>Date <span><BiChevronDown /></span></label>
          {/* <input type='text' id='date' autoComplete='off' placeholder='When you will go' /> */}
          <DatePicker onChange={onChange} bordered={false} />
        </div>
        <div className='hero__form--field-wrapper guest'>
          <label className='flex items-center' htmlFor='guest'>Guest <span><BiChevronDown /></span></label>
          <input 
            type='text' 
            id='guest' 
            autoComplete='off' 
            placeholder='Number of guest' 
            name='guest'
            { ...register('guest') }
          />
        </div>
        <button 
          className='hero__form--button'
          onClick={showDrawer}
        >
          Explore Now
        </button>
      </form>
    </section>
    <Drawer
      title='Search results'
      placement='bottom'
      onClose={onClose}
      open={open}
    >
      <HotelResult>
        {
          hotelsByLocation.map((hotel, index) => (
            <HotelResultCard key={index} details={hotel} />
          ))
        }
      </HotelResult>
    </Drawer>
  </>)
}

export default Hero
