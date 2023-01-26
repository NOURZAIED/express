const express = require('express')
const app = express()
const workingHours = (req, res, next) => {
  const currentDate = new Date();
  const day = currentDate.getDay();
  const hour = currentDate.getHours();

  if (day >= 1 && day <= 5 && hour >= 9 && hour <= 17) {
      next();
  } else {
      res.status(503).send('The website is only available during working hours (Monday to Friday, from 9 to 17)');
  }
}

app.use(workingHours);



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home-page.html')
  })

  app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact-us.html')
  })

  app.get('/services', (req, res) => {
    res.sendFile(__dirname + '/our-services.html')
  })


  app.get('/Home.css', (req,res)=>{
    res.sendFile(__dirname + '/Home.css')
})

app.listen(5000, () => {
  console.log('Server running on port 5000')
})