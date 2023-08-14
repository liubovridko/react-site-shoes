
import React from 'react';
import styles from "./Drawer.module.scss";
import Info from "./Info.js";
import AppContext from "../../context.js";
import axios from 'axios';

const delay =(ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onRemove, items=[]}) {

const [isOrderComplete, setIsOrderComplete] = React.useState(false);
const [orderId, setOrderId] = React.useState(null);
const [isLoading, setIsLoading] = React.useState(false); 
const { itemsCart, setItemsCart, setCartOpened } = React.useContext(AppContext);


const onClickCheckout= async () => {
	  try{
	  	    setIsLoading(true);
		    const {data} = await axios.post('http://localhost:3000/orders', { items:itemsCart});
		    setOrderId(data.id);
			setIsOrderComplete(true);
			for ( let i=0 ; i< itemsCart.length; i++) {
				const item = itemsCart[i];
				await  axios.delete('https://64d11d88ff953154bb7a01ae.mockapi.io/cart/'+ item.id);
				await delay(1000);
			}
			setItemsCart([]);
		} catch(error) {
			alert("Failed checkout");
		}
		setIsLoading(false);
	}
	return(
		<div className={styles.overlay}  >
	        <div className="d-flex flex-column" className={styles.drawer} >
	        
	          <h2 className="mb-30 d-flex justify-between"> 
	              Кошик<img  onClick={()=> setCartOpened(false)} className={styles.btnCartRemove} src="img/btn-cart-remove.svg" alt="Button Remove" />
	          </h2>


	         
       {
       	items.length>0 ? (
              <div className={styles.CartItems}>
		          <div className="flex" className={styles.items} >
		{
			items.map((obj,key) =>(
	             <div className="d-flex align-center mb-20" className={styles.cartItem} key={obj.id} >
		               <div className="mr-10" className={styles.cartIatemImg} style={{ backgroundImage:`url(${obj.imageUrl})` }} ></div>
		               <div className="mr-10">
		                 <p className="mb-5">{obj.title}</p>
		                 <b>{obj.price} грн</b>
		               </div>
		               <img onClick={() => onRemove(obj.id)} className={styles.btnCartRemove} src="img/btn-cart-remove.svg" alt="Button Remove" />
		            </div>
			))}
		            

		          </div>

		       
			        <div className={styles.cartBlockBottom} >
			            <div className="d-flex align-end mb-15">      
			               <p> Итого: </p> 
			               <div className={styles.lineDashed}></div>
			               <b>21 498 грн.</b>
			            </div>

			            <div className="d-flex  align-end mb-20">
			                <p >Налог 5%:  </p>
			                <div className={styles.lineDashed}></div>
			                <b>1074 грн.</b>
			            </div>		            
			                <button disabled={isLoading} onClick={onClickCheckout} className={styles.greenButton}>Оформити замовлення<img  className="mr-20" width={13} height={12} src="img/icon_right.svg" alt="icon" /></button>  		            
			        </div>

		        </div>) : (

		         <Info image={isOrderComplete ? "img/order-complete.svg" : "img/cart-empty.png"} title={isOrderComplete ? "Замовлення оформлено" :"Корзина порожня"} description={isOrderComplete ? `Ваше замовлення #${orderId} скоро буде передано кур'єрській доставці` : "Додайде хоча б одну пару кросівок, щоб зробити замовлення"} />
                       )}
           

	        </div>
     	</div>

		);
}


export default Drawer;