import axios from 'axios'
export const server = axios.create({
    withCredentials : true
})