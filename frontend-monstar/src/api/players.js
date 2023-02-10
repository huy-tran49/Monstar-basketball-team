import apiUrl from '../apiConfig'
import axios from 'axios'

export const showAllPlayers = () => {
    return axios(`${apiUrl}/players`)
}