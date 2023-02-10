import React from "react";
import Scoops from "./scoops";
import OrderForm from "../form/OrderForm";
import Tooppings from "./Toppings";



const WelcomePage = () =>{
    return (
        <div>
       
          <Scoops />
          
          <Tooppings />
       
          <OrderForm />
        </div>
      );
}
export default WelcomePage