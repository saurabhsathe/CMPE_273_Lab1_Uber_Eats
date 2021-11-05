import axios from "axios";

export function getfavs(data){
    return axios.post(process.env.REACT_APP_BACKEND+"getfavourites",data.user,function(err,resu){
        if(err){
            console.log("error in axios",err)
        }
    })
 
    .then((response)=>{
    
    if(response.status === 200)
    {
        console.log("got your data----------------->")
        console.log(response.data,typeof response.data)
        return response.data
        
    }
    else if(response.status === 202)
    {
        console.log("no data found")
        return null
    }

})
}