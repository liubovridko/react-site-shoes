
import React from 'react';
import styles from './Card.module.scss';

function Card({ onFavorite, onPlus, id, imageUrl, title, price, favorited=false }) {
  const [isAdded, setIsAdded]=React.useState(false);
  const [isFavorite, setIsFavorite]=React.useState(favorited);
  const onClickPlus= ()=>{
    onPlus({ title, imageUrl, price});
    setIsAdded(!isAdded);
  }
  const onClickFavorite = ()=> {
     onFavorite({ id ,title, imageUrl, price});
     setIsFavorite(!isFavorite);
  }
  
	return(
		  <div className={styles.card}>
                  <img  src= {isFavorite ? "img/added_to_favorite.svg" :"img/add_to_favorit.svg"} onClick={onClickFavorite} className={styles.icon_like} width="32" height="32" alt="Add to favorite" />
                  <img  src={imageUrl} width="133" height="112" alt="nike"/>
                  <h3>{title}</h3>

                  <div className="d-flex justify-between">
                       <p>ЦІНА<br/><span>{price} грн</span></p>
                       <img className={styles.plus} onClick={onClickPlus} src={ isAdded ? "img/btn-checked.svg" :"img/btn-plus.svg"} width={32} height={32} />
                  </div>
             </div>        
		);
}




export default Card; 

