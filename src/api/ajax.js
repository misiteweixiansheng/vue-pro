import axios from "axios"

axios.interceptors.request.use(
  function(config){
    console.log(config)
    return config
  },
  function(error){
    console.log(error)
    return new Promise(()=>{})
  }
)

axios.interceptors.response.use(
  function(response){
    console.log(response.data)
    return response.data
  },
  function(error){
    console.log(error)
    return new Promise(()=>{})
  }
)
export default axios