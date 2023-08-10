
import React from 'react';
import './App.scss';
import axios from 'axios';
import {Route, Routes} from 'react-router-dom';

import Header from './components/Header/Header.js';
import Drawer from './components/Drawer/Drawer.js';
import Home from './pages/Home.jsx';
import Favorites from './pages/Favorites.jsx';


function App() {
  const arr = [
  {title:'Мужские Кроссовки Nike Air Max 270', price:12999, imageUrl:"/img/sneakers/image1.svg"},
  {title:"Мужские Кроссовки Nike Blazer Mid Suede", price:12999, imageUrl:"/img/sneakers/image2.svg"},
  {title:"Мужские Кроссовки Nike Blazer Mid Suede", price:8999, imageUrl:"/img/sneakers/image3.svg"},
  {title:"Кроссовки Puma X Aka Boku Future Rider", price:8499, imageUrl:"/img/sneakers/image4.svg"},
  {title:"Мужские Кроссовки Under Armour Curry 8", price:15999, imageUrl:"/img/sneakers/image5.svg"},
  {title:"Мужские Кроссовки Nike Kyrie 7", price:13999, imageUrl:"/img/sneakers/image6.svg"},
  {title:"Мужские Кроссовки Jordan Air Jordan 11", price:10999, imageUrl:"/img/sneakers/image7.svg"},
  {title:"Мужские Кроссовки Jordan Air Jordan 11", price:11999, imageUrl:"/img/sneakers/image8.svg"},
  {title:"Мужские Кроссовки Nike LeBron XVIII", price:15999, imageUrl:"/img/sneakers/image9.svg"},
  {title:"Мужские Кроссовки Nike Lebron XVIII Low", price:13999, imageUrl:"/img/sneakers/image10.svg"},
  {title:"Мужские Кроссовки Nike Blazer Mid Suede", price:8499, imageUrl:"/img/sneakers/image11.svg"},
  {title:"Кроссовки Puma X Aka Boku Future Rider<", price:8999, imageUrl:"/img/sneakers/image12.svg"}
  ];

  const [items, setItems] = React.useState([]);
  const [itemsCart, setItemsCart] = React.useState([]);
  const [itemsFavorite, setItemsFavorite] = React.useState([]);
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

     axios.get('https://react-shop.free.mockoapp.net/favorite').then((res) =>{
      setItemsFavorite(res.data);
     });


  }, []);

  const onAddToCart = (obj) => {
     axios.post('https://64d11d88ff953154bb7a01ae.mockapi.io/cart', obj);
     setItemsCart( prev => [...prev, obj]);
  }
  const addToFavorite = (obj) => {
    console.log(obj);

    if(itemsFavorite.find(obj => obj.id == obj.id)) {
      axios.delete(`https://react-shop.free.mockoapp.net/favorite/${obj.id}`);
      setItemsFavorite( prev => prev.filter((item) => item.id !== obj.id));
      } else {

      axios.post('https://react-shop.free.mockoapp.net/favorite', obj);
      setItemsFavorite( prev => [...prev, obj]);     
     }
      
  }

  const onRemoveItem = (id)=> {
    axios.delete(`https://64d11d88ff953154bb7a01ae.mockapi.io/cart/${id}`);
   setItemsCart( prev => prev.filter((item) => item.id !== id));
  }

  const onChangeSearchValue= (event) => {
      setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">
     
    { cartOpened && <Drawer items={itemsCart} onClose={()=>setCartOpened(false)} onRemove ={onRemoveItem} />  }
    
    <Header  onClickCart={()=> setCartOpened(true)} />
    <Routes>
      <Route path="/" exact element={<Home searchValue={searchValue} onChangeSearchValue={onChangeSearchValue} items={items} onAddToFavorite={(obj)=>addToFavorite(obj)}  onAddToCart={onAddToCart}  />} />
       
      <Route path="/favorites" element={ <Favorites items={itemsFavorite} onAddToFavorite={(obj)=>addToFavorite(obj)}  onAddToCart={onAddToCart} />} exact />
        
      
    </Routes>
      
    </div>
  );
}

export default App;
