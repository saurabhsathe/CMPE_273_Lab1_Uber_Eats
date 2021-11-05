import axios from "axios";

export function get_resto(data){
    return axios.post(process.env.REACT_APP_BACKEND+"getDishes",data).then(response=>{
        console.log("repsonse is--------->",response.data)
        if(response.status === 200)
        {
            
            console.log(response.data,typeof response.data)
            setdishes(response.data)
            console.log("gsdfsdfds=================",dishes_received)
            
            
        }
        else if(response.status === 400)
        {
        }

})
}