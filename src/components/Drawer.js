function Drawer() {
	return(
		<div className="overlay" style={{ display:'none' }} >
	        <div className="drawer d-flex flex-column">
	        
	          <h2 className="mb-30 d-flex justify-between"> 
	              Кошик<img className="btnCartRemove cu-p" src="img/btn-cart-remove.svg" alt="Button Remove" />
	          </h2>
	          <div className="items flex">

	            <div className="cartItem d-flex align-center mb-20">
	               <div className="cartIatemImg mr-10" style={{ backgroundImage:'url(img/sneakers/image1.svg)'}} ></div>
	               <div className="mr-10">
	                 <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
	                 <b>12 999грн</b>
	               </div>
	               <img className="btnCartRemove" src="img/btn-cart-remove.svg" alt="Button Remove" />
	            </div>

	            <div className="cartItem d-flex align-center mb-20">
	               <div className="cartIatemImg mr-10" style={{ backgroundImage:'url(img/sneakers/image1.svg)'}} ></div>
	               <div className="mr-10">
	                 <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
	                 <b>12 999грн</b>
	               </div>
	               <img className="btnCartRemove" src="img/btn-cart-remove.svg" alt="Button Remove" />
	            </div>
	          </div>

	       
		        <div className="cart-block-b">
		            <div className="d-flex align-end mb-15">      
		               <p> Итого: </p> 
		               <div className="line-dashed"></div>
		               <b>21 498 грн.</b>
		            </div>

		            <div className="d-flex  align-end mb-20">
		                <p >Налог 5%:  </p>
		                <div className="line-dashed"></div>
		                <b>1074 грн.</b>
		            </div>		            
		                <button className="greenButton">Оформити замовлення<img  className="mr-20" width={13} height={12} src="img/icon_right.svg" alt="icon" /></button>  		            
		        </div>

	        </div>
     	</div>

		);
}

export default Drawer;