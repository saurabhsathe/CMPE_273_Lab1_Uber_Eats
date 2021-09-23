import React from 'react'

const Jumbo = () => {
function handleSearch(e){
    alert(e.target.value)
}

    return (
        <div style={{paddingBottom:"0px"}}>
            <header className="jumbotron jumbotron-fluid  landing" >
                <div className="container-fluid text-left"> 
                <h1 className="display-3" style={{color:"white"}}>Want food? Get food.</h1>
                <form onSubmit={handleSearch}>
                    <p className="display-4" >Food Anytime Anywhere and for Anyone</p>
                    <p><button type = "submmit" className="btn btn-dark btn-lg" >Login/Register</button></p>
                </form>
                </div>
                
            </header>

        </div>
    )
}

export default Jumbo
