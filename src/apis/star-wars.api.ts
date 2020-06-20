import axios from 'axios';

//const baseURL = 'https://star-wars-api-unifacef.herokuapp.com';
const baseURL = process.env.REACT_APP_STAR_WARS_BASE_URL;

//export const getFilms = async () => {
export const getFilms = () => {
  return axios.request({ baseURL, url: 'films' })
}

//export const getFilmById = async (id: number) => {
export const getFilmById = (id: number) => {
  return axios.request({ baseURL, url: `films/${id}` })
}