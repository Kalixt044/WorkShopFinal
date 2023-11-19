import axios from 'axios'
import endpoints from './endpoints'

const createUser = async ( body ) => {
  try {
    await axios.post(endpoints.register, body)
  } catch (error) {
    console.warn(error)
    // return 'Usuario ya existe'
  }
}

export { createUser }