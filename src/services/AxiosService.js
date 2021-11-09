import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})
export const nasaAPI = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=TusYeti2siDmLVJdzgiuG1Jx3wysSx2MGS3DJmZQ',
  timeout: 8000
})