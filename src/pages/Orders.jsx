import React from 'react';
import Card from '../components/Card/Card.js';
import axios from 'axios';
import AppContext from "../context.js";

function Orders() {
    const style = {
      color: 'black',
      fontSize: 24,
      borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
    };
   const {addToFavorite}=React.useContext(AppContext);
   const [orders, setOrders] = React.useState([]);
   const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(()=>{
    ( 
      async ()=>{
        try{
          const {data}= await axios.get('http://localhost:3000/my-orders');
          setOrders(data);
          setIsLoading(false);
        } catch (error) {
          alert('error get orders');
          console.error(error);
        }
    } )();
     
  },[])

	return (
		
        <section className="content">

            <div  className="d-flex justify-between mb-30">

            <h1>Мої замовлення</h1>
               
            </div>
            <div className="d-flex justify-start flex-wrap ">
                <h3 style={style} >Замовлення #</h3>
               {orders
            .map((item, index) => (
                  
                  <Card key={index} loading={isLoading}  {...item} onFavorite={(obj) =>addToFavorite(obj)}  />   
          ))
          } 
              </div>
                                 
        </section>
	);
}

export default Orders;