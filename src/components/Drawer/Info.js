
import React from 'react';
import styles from "./Drawer.module.scss";
import AppContext from "../../context.js";

const Info = ({image, title, description})=>{
	
	const { setCartOpened } = React.useContext(AppContext);
	return (
		    <div className={styles.cartEmpty}>
	              <img src={image} width={120} height={120} alt="Cart empty" />
	              <h3>{title}</h3>
	              <p>{description}</p>
	              <button onClick={()=>setCartOpened(false)} className={styles.greenButton}>Повернутися назад<img  className="mr-20" width={13} height={12} src="img/icon_right.svg" alt="icon" /></button>
	          </div>
		);
}


export default Info;