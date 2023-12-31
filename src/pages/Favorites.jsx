import React from 'react';
import Card from '../components/Card/Card.js';
import AppContext from "../context.js";

function Favorites({ onAddToFavorite, onAddToCart}) {
  const {itemsFavorite}=React.useContext(AppContext);

	return (
		
        <section className="content">

            <div  className="d-flex justify-between mb-30">

            <h1>Мої закладки</h1>
               
            </div>
            <div className="d-flex justify-start flex-wrap test-favorite">
 
               {itemsFavorite
            .map((item, index) => (
                  <Card key={index}  {...item} favorited={true} onFavorite={(obj) =>onAddToFavorite(obj)} onPlus={(obj) => onAddToCart(obj)} />
          ))} 
              </div>
                                 
        </section>
	);
}

export default Favorites;