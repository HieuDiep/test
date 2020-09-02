const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
var handlebars = require('express-handlebars');
const path = require('path')

//http logger
app.use(morgan('combined'))

//template engine
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars');

app.set('views',path.join(__dirname,'resources/views'))
//console.log('PATH: ',path.join(__dirname,'resources/views'))

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})