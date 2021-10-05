import React from 'react'

const Dish = () => {
    return (
        <div className="col-md-4 mb-4">
        <div className="card h-100">
           <img className="card-img-top" src="design.jpg" alt="Design" />
           <div className="card-body">
              <h4 className="card-title">Dish 3</h4>
              <p className="card-text">Get the best dishes</p>
           </div>
           <div className="card-footer py-4">
           <table><tr>
           <td><button type="button" class="btn btn-dark">Details</button></td>
           <td><button type="button" class="btn btn-dark">Delete</button></td>
           <td><button type="button" class="btn btn-dark">Update</button></td>
           
           </tr></table>
               </div>
        </div>
     </div> 
    )
}

export default Dish
