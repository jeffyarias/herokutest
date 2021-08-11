import React from 'react';
import extra from './Extras.module.css';
import fridge from './images/kitchen.png';
import oven from './images/gas-stove.png';
import truck from './images/moving-truck.png';
import wiping from './images/wiping.png'



const extras = (props)=> {
  
  const fridgeClass = [];
  if (props.classFridge === "active") {
    fridgeClass.push(extra.active);
  } else {
    fridgeClass.push(extra.desactive);

  }
  const ovenClass = [];
  if(props.classOven=== "active") {


    ovenClass.push(extra.active)
  }else {
      ovenClass.push(extra.desactive)
  }

  const moveClass = [];
  if(props.classMove=== "active") {


    moveClass.push(extra.active)
  }else {
      moveClass.push(extra.desactive)
  }
  
  const wallClass = [];
  if(props.classWall=== "active") {


    wallClass.push(extra.active)
  }else {
      wallClass.push(extra.desactive)
  }
    

  // Callback Functions
    const fridgeFunc  = ()=>{
      const  name = "fridge"
      props.onclick(name)
    }

    const ovenFunc  = ()=>{
      const  name = "oven"
      props.onclick(name)
    }

    const moveFunc  = ()=>{
      const  name = "move"
      props.onclick(name)
      
    }

    const wallFunc  = ()=>{
      const  name = "wall"
      props.onclick(name)
    }
     
     
    return (
        
        <div className={extra.extrasIcons}>
       <div  onClick={fridgeFunc} className={fridgeClass.join(' ')}>
        <img src={fridge} />
        <p  className={extra.title}>Inside the fridge</p>
    
       </div>
       <div onClick={ovenFunc} className={ovenClass.join(' ')}>
           <img src={oven}/>
           <p className={extra.title}>Inside the Oven</p>
       </div>
       <div onClick={moveFunc} className={moveClass.join(' ')}>
           <img src={truck }/>
           <p className={extra.title}>Move in/out</p>
           </div>

           <div onClick={wallFunc} className={wallClass.join(' ')}>
           <img src={wiping }/>
           <p className={extra.title}>Wall Washing</p>
       </div>
        </div>
    )






}

export default extras;
