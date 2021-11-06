import axios from "axios";

export function add_dish(data){
    return   axios.post(process.env.REACT_APP_BACKEND+'addDish',data).then(response => {
        
        if(response.status === 200){
            console.log("added dish")
            
            return true
            }else if(response.status === 202){
            
                return false


            
        }
    });
}