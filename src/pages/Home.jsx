import Card from '../components/Card/Card.js';
import Slider from '../components/Slider/Slider.js';


function Home({searchValue, onChangeSearchValue, items, onAddToFavorite, onAddToCart}) {
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
            <div className="d-flex justify-start flex-wrap">

         {items
            .filter(item=> item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, index) => (
                  <Card key={index} title={item.title} price={item.price} imageUrl={item.imageUrl} onFavorite={(obj) =>onAddToFavorite(obj)} onPlus={(obj) => onAddToCart(obj)} />
          ))}
               
                
              </div>
                                 
        </section>
    </div>
	);
}

export default Home;