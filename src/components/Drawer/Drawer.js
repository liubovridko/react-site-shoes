import styles from "./Drawer.module.scss";

function Drawer({onClose, onRemove, items=[]}) {


	return(
		<div className={styles.overlay}  >
	        <div className="d-flex flex-column" className={styles.drawer} >
	        
	          <h2 className="mb-30 d-flex justify-between"> 
	              Кошик<img  onClick={onClose} className={styles.btnCartRemove} src="img/btn-cart-remove.svg" alt="Button Remove" />
	          </h2>


	         
       {
       	items.length>0 ? (
              <div className={styles.CartItems}>
		          <div className="flex" className={styles.items} >
		{
			items.map((obj,index) =>(
	             <div className="d-flex align-center mb-20" className={styles.cartItem} key={index} >
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
			                <button className={styles.greenButton}>Оформити замовлення<img  className="mr-20" width={13} height={12} src="img/icon_right.svg" alt="icon" /></button>  		            
			        </div>

		        </div>) : (

		         <div className={styles.cartEmpty}>
	              <img src="img/cart-empty.png" width={120} height={120} alt="Cart empty" />
	              <h3>Корзина порожня</h3>
	              <p>Додайде хоча б одну пару кросівок, щоб зробити замовлення</p>
	              <button onClick={onClose} className={styles.greenButton}>Повернутися назад<img  className="mr-20" width={13} height={12} src="img/icon_right.svg" alt="icon" /></button>
	          </div>
       )}
           
		    

	        </div>
     	</div>

		);
}

export default Drawer;