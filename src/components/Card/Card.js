
import React from 'react';
import styles from './Card.module.scss';
import ContentLoader from "react-content-loader"


function Card({ onFavorite, onPlus, id, imageUrl, title, price, favorited=false, added=false, loading }) {
  const [isAdded, setIsAdded]=React.useState(added);
  const [isFavorite, setIsFavorite]=React.useState(favorited);
  const onClickPlus= ()=>{
    onPlus({ id, title, imageUrl, price});
    setIsAdded(!isAdded);
  }
  const onClickFavorite = ()=> {
     onFavorite({ id ,title, imageUrl, price});
     setIsFavorite(!isFavorite);
  }
  
	return(
		    <div className={styles.card}>
          {loading ?   <ContentLoader 
              speed={2}
              width={150}
              height={265}
              viewBox="0 0 150 265"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="0" y="129" rx="5" ry="5" width="150" height="15" /> 
              <rect x="0" y="0" rx="10" ry="10" width="150" height="112" /> 
              <rect x="0" y="155" rx="5" ry="5" width="93" height="15" /> 
              <rect x="0" y="194" rx="10" ry="10" width="80" height="24" /> 
              <rect x="109" y="124" rx="8" ry="8" width="32" height="32" />
            </ContentLoader> : <> <img  src= {isFavorite ? "img/added_to_favorite.svg" :"img/add_to_favorit.svg"} onClick={onClickFavorite} className={styles.icon_like} width="32" height="32" alt="Add to favorite" />
                    <img  src={imageUrl} width="133" height="112" alt="nike"/>
                    <h3>{title}</h3>
                    <div className="d-flex justify-between">
                         <p>ЦІНА<br/><span>{price} грн</span></p>
                         <img className={styles.plus} onClick={onClickPlus} src={ isAdded ? "img/btn-checked.svg" :"img/btn-plus.svg"} width={32} height={32} />
                    </div>
            </>
          }
                  
        </div>        
		);
}




export default Card; 

