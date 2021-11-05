import axios from "axios";

export function update_user(data){
    return  axios.post(process.env.REACT_APP_BACKEND+'updateUser',data)
    .then(response => {
        if(response.status === 200){
            console.log("updated")
           // props.setupdated(true)
           return true
            }else if(response.status === 202){
            
            return false


            
        }
    });
}