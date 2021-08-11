import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
 render() {


return(


<StripeCheckout 
amount={2000}
label="Credit Card"
name="Boston Maids"
email="jeffreyarias21@gmail.com"
token={ token => console.log(token)}
stripeKey={"pk_test_yBMj0cqYIXUsXeJ0lnVBil1T"}


/>
 



);


 }





}


export default Payments;

