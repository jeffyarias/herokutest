import React from 'react';
import './bookingModal.css';
const bookingModal = (props)=> {
return(
    <div>
<div  className="bookingModal">
<h1>Booking Details</h1>

<p>Bedrooms {props.bedrooms}</p>
<p>Bathrooms {props.bathrooms} </p>
<p>Carpet</p>
<p>Price ${props.totalPrice}</p>
</div>
</div>
);



};
export default bookingModal;