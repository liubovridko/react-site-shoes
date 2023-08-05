import styles from "./Slider.module.scss";

function Slider() {
	return(
		 <div className={styles.slider}>
        <div className={styles.slider_left_part}>

             <img src="/img/slider_logo.png" alt="logo-slider"/>
             <div className={styles.slider_info}>
                   <p>Stan Smith, <span>Forever!</span></p>
                   <button>КУПИТИ</button>
             </div>
         </div>

         <div className={styles.slider_right_part}>



              <img src="/img/image_slider.png" alt="slider" />


         </div>
    </div>
		);
}

export default Slider;