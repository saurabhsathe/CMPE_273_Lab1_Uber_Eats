import React from 'react'

const SidePanel = () => {
    return (
        <div className="container-fluid" style={{marginTop:"50px"}}>
            <div className="row min-vh-100 flex-column flex-md-row">
                <aside className="col-12 col-md-3 col-xl-2 p-0 bg-dark flex-shrink-1">
                    <nav className="navbar navbar-expand-md navbar-dark bd-dark flex-md-column flex-row alugn-items-center py-2 text-center sticky-top" id="sidebar">
                        <div className="text-center p-3">
                            <img src="/mypic.png" alt="profile picture" className="img-fluid rounded-circle " width="100px"></img>
                            <button type="button" className="navbar-toggler border-0 order-1" data-toggle="collapse" data-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
                            
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <h4 id="username" style={{color:"white"}}>Saurabh Sathe</h4>

                            <hr style={{background:"white"}} />
                            <div className="collapse navbar-collapse prder-last" id="mynav">
                            <button id="advanced" value="advanced"  className="btn btn-dark btn-lg" >Advance Search</button>
                            <button id="update" value="Update" className="btn btn-dark btn-lg" >Update Profile</button>
                            <button id="orders" value="Orders" className="btn btn-dark btn-lg" >Orders</button>
                            <button id="Cart" value="Cart" className="btn btn-dark btn-lg" >Cart</button>
                            <button id="Signout" value="Signout" className="btn btn-dark btn-lg" >Signout</button>
                            </div>
                        </div>
                    </nav>

                </aside>
            </div>
        </div>
    )
}

export default SidePanel
