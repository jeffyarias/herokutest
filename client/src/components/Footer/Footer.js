import React from 'react';
import classes from './footer.module.css';


const footer = ()=> {
const date = new Date();
const year = date.getFullYear();

return(
<div>
    
<p className={classes.footerparag}>Boston Maids &copy; {year}</p>


</div>


);




};
export default footer;