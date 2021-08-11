import React from 'react';
//import classes from './modal.module.css';
import classes from './items.module.css';
//import { icon } from '@fortawesome/fontawesome-svg-core';
import 'font-awesome/css/font-awesome.min.css';
//import Payments from './Payments';
//import StripeCheckout from 'react-stripe-checkout';

const Modal = (props)=> {


   
return (
    
<div >
<h1>Booking Details</h1>
<div id="hello">


<ul>


<li><i className="fa fa-bed fa-2x fa-fw"> </i> Bedrooms {props.bedrooms}</li>
<li><i className="fa fa-bath fa-2x fa-fw"></i> Bathrooms {props.bathrooms}</li>
<li><i className="fa fa-calendar fa-2x fa-fw"></i> Date {props.date}</li>
<li> <i className="fa fa-clock-o fa-2x fa-fw"> </i> Time {props.time}</li>



<li className={classes.total}><i className="fa fa-money fa-2x fa-fw"></i> Total ${props.totalPrice}</li>

</ul>
<div className={classes.payments}>
<div className={classes.credit}>

</div>
<div className={classes.cash}>

</div>

</div>
</div>   
</div>

);





}
export default Modal;