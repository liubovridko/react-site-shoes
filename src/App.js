
import React from 'react';
import './App.scss';
import axios from 'axios';
import Card from './components/Card/Card.js';
import Header from './components/Header/Header.js';
import Drawer from './components/Drawer/Drawer.js';
import Slider from './components/Slider/Slider.js';


function App() {

  const [items, setItems] = React.useState([]);
  const [itemsCart, setItemsCart] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() =>{
    fetch('https://64d11d88ff953154bb7a01ae.mockapi.io/items')
  .then((res) => {
     return res.json();
     })
    .then( (json)=> {
      setItems(json);
     });

     axios.get('https://64d11d88ff953154bb7a01ae.mockapi.io/cart').then((res) =>{
      setItemsCart(res.data);
     });


  }, []);

  const onAddToCart = (obj) => {
     axios.post('https://64d11d88ff953154bb7a01ae.mockapi.io/cart', obj);
     setItemsCart( prev => [...prev, obj]);
  };

  const onRemoveItem = (id)=> {
    axios.delete(`https://64d11d88ff953154bb7a01ae.mockapi.io/cart/${id}`);
   setItemsCart( prev => prev.filter((item) => item.id !== id));
  }

  const onChangeSearchValue= (event) => {
      setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
     
    { cartOpened && <Drawer items={itemsCart} onClose={()=>setCartOpened(false)} onRemove ={onRemoveItem} />  }

    <Header  onClickCart={()=> setCartOpened(true)} />
    
   <Slider />

    <section className="content">

        <div  className="d-flex justify-between mb-30">

        <h1>{searchValue ? `Пошук по значенню:"${searchValue}"` : "Усі кроссовки" }</h1>
          <div className="search-form d-flex">
           <img src="img/search.svg" alt="search" />
            <input onChange={onChangeSearchValue} className="input_search" type="search" value={searchValue} placeholder="Пошук..." />

          </div>  
        
        </div>
        <div className="d-flex justify-between flex-wrap">
     {items
        .filter(item=> item.title.toLowerCase().includes(searchValue.toLowerCase()))
        .map((item, index) => (
              <Card key={index} title={item.title} price={item.price} imageUrl={item.imageUrl} onClickFavorite={()=> console.log('Add to favorite')} onPlus={(obj) => onAddToCart(obj)} />
      ))}
           
            
          </div>
                             
    </section>
      
    </div>
  );
}

export default App;
