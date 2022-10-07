import axios from 'axios';

axios.defaults.baseURL='https://jsonplaceholder.typicode.com/'

const users = axios.get('users')
const posts = axios.get('posts')
const photos = axios.get('photos')

export const getDataLoad = () => {
  return axios.all([users, posts, photos])
}
