import axios from "axios";

export function get_cust_orders(data){
    return  axios.post(process.env.REACT_APP_BACKEND+"getDishes",data).then(response=>{
                
        if(response.status === 200)
        {
            
            console.log(response.data,typeof response.data)
            //setdishes(response.data)
            return response.data
            
            
        }
        else if(response.status === 202)
        {
            return []
        }

})}