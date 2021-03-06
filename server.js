const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const keys = require('./config/keys');
const stripe = require('stripe')('sk_test_JeQ2cigQcaMk3INVX6NW1uTX');
const axios = require('axios');
var path = require('path');
var Router = require('router');
const cors = require('cors');
const { google } = require('googleapis');
var enforce = require('express-sslify');
const app = express();
const nodeoutlook = require('nodejs-nodemailer-outlook')
var User = require('./BostonSchema.js');

//app.use(enforce.HTTPS({ trustProtoHeader: true }))

var router = Router();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//app.post('/api/stripe', (req, res) => {console.log(req.body)});
app.post('/api/stripe', async (req, res) => {
    console.log(req.body.service)
    const CLIENT_ID = '294754709967-u2ffp4u74beaok9j511vrt5dbe7pul1l.apps.googleusercontent.com';
    const CLIENT_SECRET = 'P85x0xcPKSnYuJRnOCHzwZpI';
    const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
    const REFRESH_TOKEN = '1//04JTzfzTQxB8_CgYIARAAGAQSNwF-L9Ir0ZoPiDQ3OmLM3C4o6Xm0CAlGQ0vgLj-XVXjA4duzacUV7gMs57RYoqENyrQxp0GaZdY'
    const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN})
     
   let error;
   let status;
   let nothing;
   try { 
   const  { service, token } = req.body;
   console.log(service)

const customer = await stripe.customers.create({
 email: token.email,
 source: token.id

   });
   const charge = await stripe.charges.create({
       
    amount: service.price *100,
    currency: 'usd',    
    description: 'Cleaning Services',
    customer: customer.id,
    receipt_email: token.email
    
    
    });
    console.log(charge);
   status = "success";


   const htmlEmail = `<h3>Contact Detail</h3>
         <ul>
         <li>Name: ${service.name}</li>
         <li>Email: ${service.email}</li>
         <li>Address: ${service.address}</li>
         <li>Bedrooms: ${service.bedrooms}</li>
         <li>Bathrooms: ${service.bathrooms}</li>
         <li>Fridge: ${service.fridgeStatus}</li>
         <li>Oven: ${service.ovenStatus}</li>
         <li>Price: ${service.price}</li>
         <li>Date: ${service.date}</li>
         <li>Time: ${service.time}</li>

     
         </ul>
         
         `

         mongodbURI = "mongodb+srv://jeffyarias:!Scorpion182177@cluster0.dtmma.mongodb.net/BOSTONMAIDS?retryWrites=true&w=majority"
         mongoose.connect(mongodbURI, {useNewUrlParser: true, useUnifiedTopology: true});
         const db = mongoose.connection;
         db.on('error', console.error.bind(console, 'connection error:'));
         db.once('open', function() {
           console.log("we're connected!");
         });
         




const newClient = new User({
    name: service.name,
    address: service.address,
    phone: service.phone,
});
newClient.save(function (err){
    if (err) return handlerError(err);
    console.log('Cleint was Saved');
    
    
});



async function sendEmail() {

try {
    nodeoutlook.sendEmail({
        auth: {
            user: "contactus@bostonmaids.com",
            pass: "182177"
        },
        from: 'contactus@bostonmaids.com',
        to: 'jeffreyarias21@gmail.com, 8579309859@tmomail.net',
        subject: 'Hey you, awesome!',
        html: htmlEmail,
        text: service.name,
        onError: (e) => console.log(e),
        onSuccess: (i) => console.log(i)
    }
    
    
    );
    

} catch (error) {
    return error
}


}

sendEmail().then(result=>console.log('Email sent...', result))
.catch(error=> console.log(error.message));
   

    


    
} catch(error) {

    console.error("Error: ", error);
    status = "failure";
}
 
 res.json({ error, status});  
    
    
    
  



});


  /*  app.post('/api/form', (req, res) => {
        // var newprice = req.body.price
     
         console.log(req.body);
     
     
     
         
         nodemailer.createTestAccount((err, account)=>{
         const htmlEmail = `<h3>Contact Detail</h3>
         <ul>
         <li>Name: ${req.body.name}</li>
         <li>Email: ${req.body.email}</li>
         <li>Address: ${req.body.address}</li>
         <li>Bedrooms: ${req.body.bedrooms}</li>
         <li>Bathrooms: ${req.body.bathrooms}</li>
         <li>Price: ${req.body.price}</li>
         
     
         </ul>
         
         `
         let transporter = nodemailer.createTransport({
         service: 'gmail',
         auth: {
          user: 'contactusbostonmaids@gmail.com',
          pass: 'Scorpion182177'
          
     
         }
      
     
         });
     
         let mailOptions = {
          from: 'Boston Maids',
          to: 'jeffreyarias21@gmail.com' ,
          subject: 'Cleaning',
          text: 'Cleaning Booking',
          html: htmlEmail,
     
     
     
     
         }
         
     transporter.sendMail(mailOptions, (err, info)=>{
     
     if(err) {
     
     console.log(err);
     
     }else {
      console.log("Email send: " + info.response);
     
     
     }
     
     });
     
     
         });
     });
     




*/




if (process.env.NODE_ENV === 'production') {
   // Express will server up production assests
   // like our main.js file, or main.css file!
   app.use(express.static('client/build'));


// Express will serve up the index.html file if doesn't reconize the route
app.get('*', (req, res)=> { 
res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

})

}

const PORT = process.env.PORT || 3001;


app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));