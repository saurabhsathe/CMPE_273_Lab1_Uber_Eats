import axios from "axios";

export function update_order(data){
    return axios.post(process.env.REACT_APP_BACKEND+'updateOrder',data)
    .then(response => {
        if(response.status === 200){
            console.log("updated")
            setupdated(true)
            }else if(response.status === 202){
            
            


            
        }
    });
}