const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

const app = express();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors());

//welcome page
app.get('/', (req, res) =>{
  res.send('ColtXP');
});

//email page
app.get('/send-email', (req, res) => {
  const { sender, text } = req.query;

  const msg ={
    to: 'drewclementsdesign@gmail.com',
    from: sender,
    subject: 'Colt Project Listing',
    text: text
  }

  sgMail.send(msg)
    .then((msg) => console.log(text));
})



app.listen(4000, () => console.log('running on port 4000'));