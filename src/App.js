
import './App.scss';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Slider from './components/Slider';

function App() {

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

            <Card />
            
          </div>
                             
    </section>
      
    </div>
  );
}

export default App;
