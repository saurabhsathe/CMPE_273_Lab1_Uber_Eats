import React from 'react'

const Dishes = () => {
    let [dishes_received,setdishes]=useState([])
    const [cookies, setCookie] = useCookies(["restaurant"]);

    
            
           
    useEffect(()=>{
        if(Object.keys(props).length == 0){
        console.log("herhehrehrhehrehrehh")
             var headers = new Headers(); 
           const data = {
                resteraunt_name:cookies.resteraunt_name,
                 zipcode:cookies.zipcode,
         
            }
  
        axios.post("http://localhost:3001/getallDishes",data).then(response=>{
                
                if(response.status === 200)
                {
                    
                    console.log(response.data,typeof response.data)
                    setdishes(response.data[0])
                    console.log("gsdfsdfds",dishes_received)
                    
                    
                }
                else if(response.status === 202)
                {
                    console.log("no data found")
                }

        })
       
    }
    else{
        console.log("got some props")
    }



},[]);
  

let details_received= dishes_received.map((dish,index) => {
    return(
        
    <DishCard id = {dish.id} 
    key ={dish.dish_id} 
    dishdp={dish.dishdp} 
    dish_name ={dish.dish_name}
    dish_desc={dish.dish_desc}
    dish={dish}
    price = {dish.price}
    
    />

    )
})


    return (


        
            <div id="services" className="container">
            
   <h2 className="display-4 text-center mt-5 mb-3">Dishes</h2>
        
   <div className="row text-center">
      {details_received}
     



    </div>
    


</div>
    )
}

export default Dishes
