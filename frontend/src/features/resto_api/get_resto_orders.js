import axios from "axios";

export function get_orders(data){

    
    return axios.post(process.env.REACT_APP_BACKEND+"getRestoOrders",data).then(response=>{
                
        if(response.status === 200)
        {
            
           return response.data
            
        }
        else if(response.status === 202)
        {
            return null
        }

})
}