import React, { Component } from "react";
import "./style.css";
import photo1 from "./Images/01.jpg";
import photo2 from "./Images/02.jpg";
import photo3 from "./Images/03.jpg";

//import styles from "./components/App.module.css"

class Slider2 extends Component {

    render()  {


  //const slides = [photo1, photo2, photo3];
 
  const auto = true; // Auto scroll
  const intervalTime = 3000;

  //const slides =  document.querySelectorAll('.slide');
  //console.log(slides);
  const nextSlide = () => {
    // Get current class
    //console.log(slides);
    const current = document.querySelector(".current");
    // Remove current class
    current.classList.remove("current");
    // Check for next slide
    if (current.nextElementSibling) {
      // Add current to next sibling
      current.nextElementSibling.classList.add("current");
      
    } else {
      // Add current to start
      document.getElementById('img1').classList.add('current');
       
      

      setTimeout(() => current.classList.remove("current"));
    }
  };

  if (auto) {
    // Run next slide at interval time
    setInterval(nextSlide, intervalTime);
    
  }

  return (
  
    
    <div class="slider">
    
      <div id="img1" class="slide current">
        <img src={photo1} />
      </div>
      <div id="img2" class="slide  ">
        <img src={photo2}/>
      </div>
      <div id="img3" class="slide  ">
        <img src={photo3}  />
      </div>

      
    </div>
  );
};
};
export default Slider2;
