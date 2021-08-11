
import React, { Component } from 'react';

import Slider from './Slider/Slider2';
import Booking from './Booking/Booking';
import About from './about';
import { Route, Link } from 'react-router-dom';
import NavBar from './Navbar/Navbar';




class Main extends Component {
    
render() {
    
    return(
        <div>
    <header>
    
<NavBar />

</header>
{/* <Sticky /> */}
 {/*<Route path="/" exact render={()=><h1>Hello World</h1>} />
<Route path="/success"  render={()=><h1>Hello World2</h1>} /> */}
<Route path="/" exact component={Slider} />
<Route path="/" exact component={Booking} />
<Route path="/booking" component={Booking} />
<Route path="/about" component={About} />


</div>

)

};


    
}

export default Main;