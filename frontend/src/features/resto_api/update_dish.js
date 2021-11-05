import axios from "axios";

export function update_dish(data){
    return axios.post(process.env.REACT_APP_BACKEND+'updateDish',data)
    .then(response => {
        
        if(response.status === 200){
            console.log("updated dish")
            
            setinserted(true)
            }else if(response.status === 202){
            
            
            console.log("could not update")

            
        }
    });
}