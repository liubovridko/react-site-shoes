
import './App.scss';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {

  return (
    <div className="wrapper clear">
     
    <Drawer />

    <Header />
    
    <div className="slider d-flex">
        <div className="slider_left_part">

             <img src="/img/slider_logo.png" alt="logo-slider"/>
             <div className="slider_info">
                   <p>Stan Smith, <span>Forever!</span></p>
                   <button>КУПИТИ</button>
             </div>
         </div>

         <div className="slider_right_part">



              <img src="/img/image_slider.png" alt="slider" />


         </div>
    </div>

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
