
import React from 'react';
import './App.scss';
import axios from 'axios';
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header.js';
import Drawer from './components/Drawer/Drawer.js';
import Home from './pages/Home.jsx';
import Favorites from './pages/Favorites.jsx';
import Orders from './pages/Orders.jsx';
import AppContext from './context.js';



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
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() =>{

    async function fetchData () {

/*    fetch('https://64d11d88ff953154bb7a01ae.mockapi.io/items')
    .then((res) => {
     return res.json();
     })
    .then( (json)=> {
      setItems(json);
     });

     axios.get('https://64d11d88ff953154bb7a01ae.mockapi.io/cart').then((res) =>{
      setItemsCart(res.data);
     });


     axios.get('http://localhost:3000/my-favorites').then((res) =>{
      setItemsFavorite(res.data);
     });*/
     try{
       const itemsResponse = await fetch('https://64d11d88ff953154bb7a01ae.mockapi.io/items').then((res) => {
       return res.json();
       });
       const cartResponse = await axios.get('https://64d11d88ff953154bb7a01ae.mockapi.io/cart');
       const favoriteResponse= await axios.get('https://64dcf393e64a8525a0f766d6.mockapi.io/my-favorites') ;

       setIsLoading(false);    
       
       setItemsCart(cartResponse.data);
       setItemsFavorite(favoriteResponse.data);
       setItems(itemsResponse);

     } catch (error) {
         alert("Помилка завантаження даних");
         console.log(error);
     }
   
   }
  fetchData();

  }, []);

  const onAddToCart = async (obj) => {

    try{
       const findItem=itemsCart.find( (item) => Number(item.parentId) === Number(obj.id) );
       if( findItem) {
        setItemsCart(prev => prev.filter( (item) => Number(item.parentId) !== Number(obj.id) ) );
         await axios.delete(`https://64d11d88ff953154bb7a01ae.mockapi.io/cart/${findItem.id}`);  
      } else {
         setItemsCart( prev => [...prev, obj]); 
         const {data}= await axios.post('https://64d11d88ff953154bb7a01ae.mockapi.io/cart', obj);
         setItemsCart( (prev) => prev.map( item => {
          if(item.parentId === data.parentId) {
            return {
              ...item,
              id : data.parentId
            };
          }
          return item;

          }));    
      }

    } catch(error) {
     alert("Error add to cart:");
     console.log(error);
    }
    
  }
  const addToFavorite = async (obj) => {
     try{
        const findItem=itemsFavorite.find( (item) => Number(item.id) === Number(obj.id) );
        if(findItem) {
          await axios.delete(`https://64dcf393e64a8525a0f766d6.mockapi.io/my-favorites/${obj.id}`);
          setItemsFavorite( prev => prev.filter((item) => item.id !== obj.id));
          } else {
          const {data}= await axios.post('https://64dcf393e64a8525a0f766d6.mockapi.io/my-favorites', obj);
          setItemsFavorite( prev => [...prev, data]);     
         }
      }
      catch(error) {  
            alert("Error add to favorite:" );
            console.log(error );
      }

  }

  const onRemoveItem = async (id)=> {
    try{
      await axios.delete(`https://64d11d88ff953154bb7a01ae.mockapi.io/cart/${id}`);
      setItemsCart( prev => prev.filter((item) => item.id !== id));
    } catch (error){
     console.log("Cant delete item");
    }
  }

  const onChangeSearchValue= (event) => {
      setSearchValue(event.target.value);
  }

  const isAddedItem = (id) => {  
     return itemsCart.some((obj )=> Number(obj.parentId) === Number(id) );
  }

  const isFavoriteItem = (id) => {  
     return itemsFavorite.some((obj )=> Number(obj.parentId) === Number(id) );
  }
   
  return (

    <div className="wrapper clear">


    <AppContext.Provider value={{items, itemsCart, itemsFavorite, isAddedItem, setCartOpened, setItemsCart, addToFavorite, isFavoriteItem, onAddToCart}} >
     
    <Drawer items={itemsCart} onRemove ={onRemoveItem} opened={cartOpened}  />    
    <Header  onClickCart={()=> setCartOpened(true)} />
    <Routes>

      <Route path="/" element={<Home isLoading={isLoading} searchValue={searchValue} onChangeSearchValue={onChangeSearchValue} items={items} itemsCart={itemsCart} onAddToFavorite={addToFavorite}  onAddToCart={onAddToCart}  />} />  
      <Route path="/favorites" element={ <Favorites items={itemsFavorite} onAddToFavorite={addToFavorite}  onAddToCart={onAddToCart} />}  />  
      <Route path="/orders" element={ <Orders  />}  />         

    </Routes>

    </AppContext.Provider>
      
    </div>
  );
}

export default App;
