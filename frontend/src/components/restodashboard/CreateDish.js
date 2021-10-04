import React from 'react'
import {useState} from 'react'
const CreateDish = () => {
    const [dish_name,setdish_name] = useState();
    const [dish_desc,setdish_desc] = useState();
    const [dish_price,setdish_price] = useState();
    const [udishdp,setudishdp] = useState();
    const [errors,seterrors]=useState();
    function handleAddDish(){

    }

    return (
        <div>
            <div className="register-form" style={{marginTop:"80px"}}>
           <h2><b>Add a dish</b></h2>
           <form onSubmit={handleAddDish} enctype="multipart/form-data">
              <div className="form-group">
                    <label>Name of the dish</label>
                    <input type="text" value={dish_name}  id="dish_name" className="form-control" placeholder="Address" onChange={e => setdish_name(e.target.value)} required/>
                 </div>
                 <div className="form-group">
                    <label>Add a description </label>
                    <input type="text" value={dish_desc} id="dish_desc" className="form-control" placeholder="Address" onChange={e => setdish_desc(e.target.value)} required/>
                 </div>
        


                 <div className="form-group">
                    <label>Add a price</label>
                    <input type="number" id="dish_price" value={dish_price} className="form-control" placeholder="Your dish price please" onChange={e => setdish_price(e.target.value)} required/>
                 </div>
        
                 
                 
                 <div className="form-group">
                    <label>Upload Dish Picture</label><br />
                    <input type="file" id="dishdp" name="dishdp" onChange={e => setudishdp(e.target.files[0])} accept=".png,.gif,.jpeg,.jpg" />
                 </div>
                 <h4 style={{color:"red"}}>{errors}</h4>

                 <button type="submit" className="btn btn-dark">Update</button>
                 
              </form>
           </div>
        </div>
    )
}

export default CreateDish
