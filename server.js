const express = require('express')
const config = require('./config/server')
const mongoose = require('mongoose')
const app = express()
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
// Body Parser Middleware
// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});


mongoose.connect(config.mongoUri,{useMongoClient:true});

require('./server/middleware')(app)
require('./server/routes')(app)
app.use(express.static('build'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/contact', (req, res) => {
  // setup email data with unicode symbols
  let mailOptions = {
      from: 'foo', // sender address
      to: 'aprehot@gmail.com', // list of receivers
      subject: `New Message from ${req.body.name}`, // Subject line
      text: req.body['message large-3'] + `\n \n email is ${req.body.email} \n phone number is ${req.body.number}` // plain text body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });

  res.sendStatus(200)
})


app.get('*',(req,res)=>{
  res.sendFile(`${__dirname}/build/index.html`)
})

const server = app.listen(config.port, () => {
  console.log('app listening on', config.port);
});



console.log("my email is: " + process.env.EMAIL_PASS)
