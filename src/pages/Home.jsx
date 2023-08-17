import React from 'react';

import Card from '../components/Card/Card.js';
import Slider from '../components/Slider/Slider.js';
import AppContext from "../context.js";

import AppContext from "../context.js";


function Home({searchValue, onChangeSearchValue, items, itemsCart, onAddToFavorite, onAddToCart, isLoading}) {

  const {isFavoriteItem }=React.useContext(AppContext);
  const filteredItems = items.filter(item=> item.title.toLowerCase().includes(searchValue.toLowerCase()));  
	const renderItems = () => {
     return( isLoading ? [...Array(10)] : filteredItems).map((item, index) => (
                  <Card key={index} loading={isLoading}  {...item} favorited={()=>isFavoriteItem(item && item.id)} onFavorite={(obj) =>onAddToFavorite(obj)} onPlus={(obj) => onAddToCart(obj)} />
          ));    
  }

  return (
		<div>
    	<Slider />

        <section className="content">

            <div  className="d-flex justify-between mb-30">

            <h1>{searchValue ? `Пошук по значенню:"${searchValue}"` : "Усі кроссовки" }</h1>
              <div className="search-form d-flex">
               <img src="img/search.svg" alt="search" />
                <input onChange={onChangeSearchValue} className="input_search" type="search" value={searchValue} placeholder="Пошук..." />

              </div>  
            
            </div>

            <div className="d-flex justify-around flex-wrap">

              { renderItems()       }
                 
              </div>
                                 
        </section>
    </div>
	);
}

export default Home;