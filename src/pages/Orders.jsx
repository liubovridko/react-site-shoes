import React from 'react';
import Card from '../components/Card/Card.js';
import axios from 'axios';
import AppContext from '../context.js';
import OrderItem from '../components/Order/OrderItem.js';

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
          const {data}= await axios.get('https://64dcf393e64a8525a0f766d6.mockapi.io/orders');
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

         {orders.map(order => (
        <OrderItem key={order.id} order={order} />
          ))}
                                 
        </section>
	);
}

export default Orders;