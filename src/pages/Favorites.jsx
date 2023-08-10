import Card from '../components/Card/Card.js';

function Favorites({items, onAddToFavorite, onAddToCart}) {
	return (
		
        <section className="content">

            <div  className="d-flex justify-between mb-30">

            <h1>Мої закладки</h1>
               
            </div>
            <div className="d-flex justify-start flex-wrap ">
 
               {items
            .map((item, index) => (
                  <Card key={index} favorited={true} {...item} onFavorite={(obj) =>onAddToFavorite(obj)} onPlus={(obj) => onAddToCart(obj)} />
          ))} 
              </div>
                                 
        </section>
	);
}

export default Favorites;