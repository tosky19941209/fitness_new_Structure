import axios from 'axios'
const port = 8080
const api = axios.create({
    baseURL:`https://deploy-backend-fitness-node.vercel.app/api`
    // baseURL:`https://l92.168.142.113:${port}/api`
    // baseURL:`https://node-backend-fitness.vercel.app/api`
    // baseURL:`https://77.37.86.133:8080/api`
})

export default api;