import styles from "./Drawer.module.scss";

function Drawer() {
	return(
		<div className={styles.overlay} style={{ display:'none' }} >
	        <div className="d-flex flex-column" className={styles.drawer} >
	        
	          <h2 className="mb-30 d-flex justify-between"> 
	              Кошик<img className="cu-p"  className={styles.btnCartRemove} src="img/btn-cart-remove.svg" alt="Button Remove" />
	          </h2>
	          <div className="flex" className={styles.items} >

	            <div className="d-flex align-center mb-20" className={styles.cartItem} >
	               <div className="mr-10" className={styles.cartIatemImg} style={{ backgroundImage:'url(img/sneakers/image1.svg)'}} ></div>
	               <div className="mr-10">
	                 <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
	                 <b>12 999грн</b>
	               </div>
	               <img className={styles.btnCartRemove} src="img/btn-cart-remove.svg" alt="Button Remove" />
	            </div>

	            <div className=" d-flex align-center mb-20" className={styles.cartItem} >
	               <div className="mr-10" className={styles.cartIatemImg} style={{ backgroundImage:'url(img/sneakers/image1.svg)'}} ></div>
	               <div className="mr-10">
	                 <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
	                 <b>12 999грн</b>
	               </div>
	               <img className={styles.btnCartRemove} src="img/btn-cart-remove.svg" alt="Button Remove" />
	            </div>
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

	        </div>
     	</div>

		);
}

export default Drawer;