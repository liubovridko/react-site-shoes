
import './App.scss';
import Card from './components/Card/Card.js';
import Header from './components/Header/Header.js';
import Drawer from './components/Drawer/Drawer.js';
import Slider from './components/Slider/Slider.js';

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

  return (
    <div className="wrapper clear">
     
    <Drawer />

    <Header />
    
   <Slider />

    <section className="content">


        <div  className="d-flex justify-between mb-30">

        <h1>Усі кроссовки</h1>
          <div className="search-form d-flex">
           <img src="img/search.svg" alt="search" />
            <input className="input_search" type="search" placeholder="Пошук..." />

          </div>  
        
        </div>
        <div className="d-flex justify-between flex-wrap">
     {arr.map((obj) => (
            <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
        ))}
           
            
          </div>
                             
    </section>
      
    </div>
  );
}

export default App;
