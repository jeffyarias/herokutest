import React from 'react';
import styles from "../Booking/Booking.module.css";

const sticky =(props)=> {

return(
    <div className={styles.sticky} >
  <p>Date {props.date}</p>
<p>Time {props.time}</p>
<p>Tota $ {props.total}</p>

    </div>
);

}

export default sticky;