import React from 'react'
import Jumbo from './Jumbo'
import DashNavbar from './DashNavbar'
import Resteraunts from './Resteraunt2'
import{useState,useEffect} from 'react'
import {useCart} from 'react-use-cart'

const Dashboard = () => {
    const {emptyCart} = useCart()
    useEffect(()=>{
        emptyCart();

    },[]);
    return (
        
<html lang="en">
   <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>UberEats</title>
        
      
      <style>
      
      </style>
   </head>
   
   <body >
   
      <div id="root">
       
        <div className="landing">
            <DashNavbar />
            <Jumbo />
            


        </div>
        <Resteraunts />
      </div>
      </body>

</html>







    )
}

export default Dashboard
