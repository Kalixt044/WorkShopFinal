import axios from 'axios'
import { endpoints } from './endpoints'

const fetchHotels = async () => {
  try {
    const { data } = await axios.get(endpoints.hotels)
    return data.data
  } catch (error) {
    console.warn(error)
  }
}

export { fetchHotels }