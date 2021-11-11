import axios from "axios";

export function get_dishes(data){
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token');
    return axios.post(process.env.REACT_APP_BACKEND+"getDishes",data).then(response=>{
        if(response.status === 200)
        {
            
            return response.data
            
            
        }
        else if(response.status === 400)
        {
            return null
        }

})
}